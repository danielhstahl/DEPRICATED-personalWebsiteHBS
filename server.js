var express = require('express');
var http=require('http');
var exphbs  = require('express-handlebars');
//var katex = require('parse-katex');
var bodyParser = require('body-parser');
var mongo=require('mongodb');
var MongoClient=mongo.MongoClient;
var mongoUtils=require('mongoUtils');

var app = express();
var port=process.env.OPENSHIFT_NODEJS_PORT || 4000; //for openshift support
var ip=process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; //for openshift support
var server  = http.createServer(app); //required fro socket.io
var io= require('socket.io').listen(server);
var mongoParameters={userDB:'', passwordDB:'', ip:'192.168.0.1', port:27017, db:"myTestDB", collection:'AppSite'};
var myDatabase=new mongoUtils(MongoClient, {url:getMongoAddress(mongoParameters.userDB, mongoParameters.passwordDB, mongoParameters.ip, mongoParameters.port, mongoParameters.db), collections:mongoParameters.collection}); //some defaults?

function getMongoAddress(user, password, ip, port, db){
  //console.log("mongodb://"+user+":"+password+"@"+ip+":"+port+"/"+db);
  if(user){
    user=user+":";
  }
  if(password){
    password=password+'@';
  }
  console.log("mongodb://"+user+password+ip+":"+port+"/"+db);
  return "mongodb://"+user+password+ip+":"+port+"/"+db;
}
app.use(bodyParser.json());
var handlebars=exphbs.create({extname: '.html'});

app.engine('html', handlebars.engine);
//app.engine('html', katex.templateEngine);
app.set('view engine', 'html');

app.use('/assets', express.static('assets'));
app.use('/assets', express.static('node_modules'));

/*page rendering */
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/admin', function (req, res) {
  res.render('admin');

});
/*end page rendering */
io.on('connection', function(socket){
  var address = socket.handshake.address;
  socket.on('projects', function(data){ //if "submit" is clicked ona  project page
    var fork = require('child_process').fork; //asynced child process
    console.log(JSON.stringify(data));
    var child=fork('node_modules/'+data.file+'.js');
    child.send(data.attributes);
    child.on('message', function(data){
        if(data.close){
          child.kill();
        }
        var key=Object.keys(data)[0];
        io.emit(key, data[key]);
    });
  });
  socket.on('pageLoad', function(data){ //call on page load, which should be whenever "path.js" is called from client
    myDatabase.insertData({page:data.file, dateEntered:new Date(), dateLeft:null, ip:address}, function(data){
      //console.log(data);
      //io.emit('updateChart', data);
    });
  });
  socket.on('disconnect', function(){ //when page is left
    myDatabase.updateData({ip:address, dateLeft:{$eq:null}}, "dateLeft", new Date(), function(data){
      io.emit('updateChart', data);
    }); //should work since all dateLefts should be not null
    console.log('user disconnected');
  });
  socket.on('testDB', function(data){
    myDatabase.test(function(isConnect){
      io.emit('dbCheck', isConnect)
    });
  });
  socket.on('updateDataBase', function(data){ //update database configuration
    var keys=Object.keys(data);
    var n=keys.length;
    for(var i=0; i<n; i++){
      mongoParameters[keys[i]]=data[keys[i]];
    }
    /*mongoParameters.ip=data.ip;
    mongoParameters.port=data.port;
    mongoParameters.collection=data.collection;
    mongoParameters.db=data.db;*/
    myDatabase=new mongoUtils(MongoClient, {url:getMongoAddress(mongoParameters.userDB, mongoParameters.passwordDB, mongoParameters.ip, mongoParameters.port, mongoParameters.db), collections:mongoParameters.collection});
    myDatabase.test(function(isConnect){
        //if(isConnect){
        //  app.render('admin', {isConnect:isConnect}); //will this work????...no
        //}
        //else{
      io.emit('dbCheck', {isConnect:isConnect, mongoDB:myDatabase.returnOptions()});
        //}

    });
  });
  /*socket.on('testDataBase', function(data){ //update database configuration
    mongoParameters.ip=data.ip;
    mongoParameters.port=data.port;
    mongoParameters.collection=data.collection;
    mongoParameters.db=data.db;
    var myDatabase=new mongoUtils(MongoClient, {url:"mongodb://"+mongoParameters.ip+":"+mongoParameters.port+"/"+mongoParameters.db, collections:mongoParameters.collections});
  });*/
  socket.on('authenticate', function(data){ //when attempt to authenticate
    var user=data.user
    var password=data.password;
    var userDatabase="userDB";
  //  var userDB=new mongoUtils(MongoClient, {url:getMongoAddress(mongoParameters.userDB, mongoParameters.passwordDB, mongoParameters.ip, mongoParameters.port, mongoParameters.db), collections:userDatabase});
    var userDB=new mongoUtils(MongoClient, {url:getMongoAddress(mongoParameters.userDB, mongoParameters.passwordDB, mongoParameters.ip, mongoParameters.port, mongoParameters.db), collections:userDatabase});
    userDB.retrieveData({user:user, password:password}, function(dat){
      if(dat.length>0){ //user exists in database
        io.emit('authenticate', {group:dat[0].group, mongoOptions:myDatabase.returnOptions()});
      }
      else{
        io.emit('authenticate', {group:'none'});
      }
    });
  });
  socket.on('requestChartData', function(clientObject){
    var dataObj=[];
    var n=clientObject.length;
    for(var i=0; i<n; i++){
      //console.log(clientObject[i].noSql);
    //  dataObj[clientObject[i].id]={};
      clientObject[i].noSql.indicator=clientObject[i].id;
      myDatabase.retrieveGroupData(clientObject[i].noSql, function(data, options){
          //data.type=clientObject[i].id;
          //console.log(clientObject[i]);
          dataObj.push({id:options.indicator, data:data});
          if(dataObj.length===n){
            io.emit('fullChartData', dataObj);
          }
          //return io.emit('totalViews', data); //open question...will this start becoming computationally expensive with many users hitting this?  this emits to all viewers
      });
    }
  });

});
/*app.post('/updateDataBase', function(req, res){ //update database configuration
  var ip=req.body.ip;
  var port=req.body.port;
  var collection=req.body.collection;
  var db=req.body.db;
  myDatabase=new mongoUtils(MongoClient, {url:"mongodb://"+ip+":"+port+"/"+db, collections:collection});

});*/

/*app.post('/stock', function(req, res){
  var stock=req.body.stock;
  http.get('http://finance.google.com/finance/info?client=ig&q='+stock+'&callback=?', function(result){
    var data="";
    result.on("data", function(chunk) {

      data=data+chunk;
    });
    result.on('end', function() {
       res.send(data);
    });

  });
});*/

server.listen(port, ip);
