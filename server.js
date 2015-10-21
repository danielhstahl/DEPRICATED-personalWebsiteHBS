var express = require('express');
var http = require('http');
var exphbs = require('express-handlebars');
//var katex = require('parse-katex');
var bodyParser = require('body-parser');
/*var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var mongoUtils = require('mongoUtils');*/
var pg = require('pg');
var app = express();
var port = process.env.OPENSHIFT_NODEJS_PORT || 4000; //for openshift support
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; //for openshift support
var server = http.createServer(app); //required fro socket.io
var io = require('socket.io').listen(server);
//var postgresqlParam={};
/*if (process.env.OPENSHIFT_POSTGRESQL_DB_PASSWORD) { //openshift support
  postgresqlParam.userDB = process.env.OPENSHIFT_POSTGRESQL_DB_USERNAME;
  postgresqlParam.passwordDB = process.env.OPENSHIFT_POSTGRESQL_DB_PASSWORD;
  postgresqlParam.ip = process.env.OPENSHIFT_POSTGRESQL_DB_HOST;
  postgresqlParam.port = process.env.OPENSHIFT_POSTGRESQL_DB_PORT;
  //postgresqlParam.db = process.env.OPENSHIFT_APP_NAME;
}*/
//if(process.env.OPENSHIFT_POSTGRESQL_DB_URL){

var postgresqlParam=process.env.OPENSHIFT_POSTGRESQL_DB_URL;

//}

/*var mongoParameters = {
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
}); //some defaults

function getMongoAddress(user, password, ip, port, db) {
  if (user) {
    user = user + ":";
  }
  if (password) {
    password = password + '@';
  }
  console.log("mongodb://" + user + password + ip + ":" + port + "/" + db);
  return "mongodb://" + user + password + ip + ":" + port + "/" + db;
}*/
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
  var req=socket.request;
  var address = req.headers['x-forwarded-for'] || req.connection._peername.address || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
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
    var client = new pg.Client(postgresqlParam);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query("INSERT INTO visitlog VALUES('"+address+"', CURRENT_TIMESTAMP, NULL, '"+data.file+"');", function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        //console.log(result.rows[0].theTime);
        //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
        client.end();
      });
    });
  });
  socket.on('disconnect', function() { //when page is left
    var client = new pg.Client(postgresqlParam);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query("UPDATE visitlog SET timeleft=CURRENT_TIMESTAMP WHERE IP='"+address+"' AND timeleft IS NULL;", function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        client.end();
      });
    });
  });
/*  socket.on('testDB', function(data) {
    myDatabase.test(function(isConnect) {
      io.emit('dbCheck', {
        isConnect: isConnect
      });
    });
  });*/
/*  socket.on('updateDataBase', function(data) { //update database configuration
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
  });*/

  socket.on('authenticate', function(data) { //when attempt to authenticate
    var user = data.user
    var password = data.password;
    var client = new pg.Client(postgresqlParam);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      client.query("SELECT COUNT(username) as user FROM username WHERE password='"+password+"' AND username='"+user+"';", function(err, result) {
        if(err) {
          return console.error('error running query', err);
        }
        client.end();
        if(result.rows[0].user==="1"){
          io.emit('authenticate', {
            group: 'admin'
          });
        }
        else{
          io.emit('authenticate', {
            group: 'none'
          });
        }
      });
    });

  });
  socket.on('requestChartData', function(clientObject) {
    var dataObj = [];
    var n = clientObject.length;
    pg.connect(postgresqlParam, function(err, client){
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      for (var i = 0; i < n; i++) {
        runQuery(clientObject[i]);
        function runQuery(options){
          var data=[];
          var query=client.query(options.sql);
          query.on('row', function(row){
            row.y=parseFloat(row.y);
            data.push(row);
          });
          query.on('end', function() {
            //done();
            dataObj.push({
              id: options.id,
              data: data,
              title:options.title
            });
            if (dataObj.length === n) {
              io.emit('fullChartData', dataObj);
              client.end();
            }
            //return res.json(results);
          });
        }
      }
    });
  });

});

server.listen(port, ip);
