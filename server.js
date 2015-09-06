var express = require('express');
var http = require('http');
var exphbs = require('express-handlebars');
//var katex = require('parse-katex');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var mongoUtils = require('mongoUtils');

var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 4000; //for openshift support
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; //for openshift support
var server = http.createServer(app); //required fro socket.io
var io = require('socket.io').listen(server);
var mongoParameters = {
  userDB: '',
  passwordDB: '',
  ip: '192.168.0.1',
  port: 27017,
  db: "myTestDB",
  collection: 'trackUse'
};

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) { //openshift support
  mongoParameters.userDB = process.env.OPENSHIFT_MONGODB_DB_USERNAME;
  mongoParameters.passwordDB = process.env.OPENSHIFT_MONGODB_DB_PASSWORD;
  mongoParameters.ip = process.env.OPENSHIFT_MONGODB_DB_HOST;
  mongoParameters.port = process.env.OPENSHIFT_MONGODB_DB_PORT;
  mongoParameters.db = process.env.OPENSHIFT_APP_NAME;
}

var myDatabase = new mongoUtils(MongoClient, {
  url: getMongoAddress(mongoParameters.userDB, mongoParameters.passwordDB, mongoParameters.ip, mongoParameters.port, mongoParameters.db),
  collections: mongoParameters.collection
}); //some defaults?

function getMongoAddress(user, password, ip, port, db) {
  //console.log("mongodb://"+user+":"+password+"@"+ip+":"+port+"/"+db);
  if (user) {
    user = user + ":";
  }
  if (password) {
    password = password + '@';
  }
  console.log("mongodb://" + user + password + ip + ":" + port + "/" + db);
  return "mongodb://" + user + password + ip + ":" + port + "/" + db;
}
app.use(bodyParser.json());
var handlebars = exphbs.create({
  extname: '.html'
});

app.engine('html', handlebars.engine);
//app.engine('html', katex.templateEngine);
app.set('view engine', 'html');

app.use('/assets', express.static('assets'));
app.use('/assets', express.static('node_modules'));

/*page rendering */
app.get('/', function(req, res) {
  res.render('index');
});
app.get('/admin', function(req, res) {
  res.render('admin');

});
/*end page rendering */
io.on('connection', function(socket) {
  //var address = socket.handshake.address;
  var req=socket.request;
  //var address = socket.request.connection._peername.address ;
  var address = req.headers['x-forwarded-for'] || req.connection._peername.address || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
  //var address = socket.request.connection.remoteAddress ;
  //console.log( socket.request.connection.remoteAddress );
  socket.on('projects', function(data) { //if "submit" is clicked ona  project page
    var fork = require('child_process').fork; //asynced child process
    console.log(JSON.stringify(data));
    var child = fork('node_modules/' + data.file + '.js');
    child.send(data.attributes);
    child.on('message', function(data) {
      if (data.close) {
        child.kill();
      }
      var key = Object.keys(data)[0];
      io.emit(key, data[key]);
    });
  });
  socket.on('pageLoad', function(data) { //call on page load, which should be whenever "path.js" is called from client
    myDatabase.insertData({
      page: data.file,
      dateEntered: new Date(),
      dateLeft: null,
      ip: address
    }, function(data) {
      //console.log(data);
      //io.emit('updateChart', data);
    });
  });
  socket.on('disconnect', function() { //when page is left
    myDatabase.updateData({
      ip: address,
      dateLeft: {
        $eq: null
      }
    }, "dateLeft", new Date(), function(data) {
      io.emit('updateChart', data);
    }); //should work since all dateLefts should be not null
    console.log('user disconnected');
  });
  socket.on('testDB', function(data) {
    myDatabase.test(function(isConnect) {
      io.emit('dbCheck', {
        isConnect: isConnect
      });
    });
  });
  socket.on('updateDataBase', function(data) { //update database configuration
    var keys = Object.keys(data);
    var n = keys.length;
    for (var i = 0; i < n; i++) {
      mongoParameters[keys[i]] = data[keys[i]];
    }

    myDatabase = new mongoUtils(MongoClient, {
      url: getMongoAddress(mongoParameters.userDB, mongoParameters.passwordDB, mongoParameters.ip, mongoParameters.port, mongoParameters.db),
      collections: mongoParameters.collection
    });
    myDatabase.test(function(isConnect) {
      io.emit('dbCheck', {
        isConnect: isConnect,
        mongoDB: myDatabase.returnOptions()
      });
    });
  });

  socket.on('authenticate', function(data) { //when attempt to authenticate
    var user = data.user
    var password = data.password;
    var userDatabase = "userDB";
    var userDB = new mongoUtils(MongoClient, {
      url: getMongoAddress(mongoParameters.userDB, mongoParameters.passwordDB, mongoParameters.ip, mongoParameters.port, mongoParameters.db),
      collections: userDatabase
    });
    userDB.retrieveData({
      user: user,
      password: password
    }, function(dat) {
      if (dat.length > 0) { //user exists in database
        io.emit('authenticate', {
          group: dat[0].group,
          mongoOptions: myDatabase.returnOptions()
        });
      } else {
        io.emit('authenticate', {
          group: 'none'
        });
      }
    });
  });
  socket.on('requestChartData', function(clientObject) {
  //app.post('/getChartData', function(req, res){
    var dataObj = [];
    //var clientObject=req.body;
    //console.log(clientObject);
    var n = clientObject.length;
    for (var i = 0; i < n; i++) {
      clientObject[i].noSql.indicator = clientObject[i].id;
      clientObject[i].noSql.title = clientObject[i].title;
      myDatabase.retrieveGroupData(clientObject[i].noSql, function(data, options) {
        if(options==='error'){
          io.emit('chartError', data);
        }
        else {
          dataObj.push({
            id: options.indicator,
            data: data,
            title:options.title
          });
          if (dataObj.length === n) {
            io.emit('fullChartData', dataObj);
          }
        }

      });
    }
  });

});

server.listen(port, ip);
