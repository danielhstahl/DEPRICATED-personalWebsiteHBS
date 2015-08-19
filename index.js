var express = require('express');
var http=require('http');
//var exphbs  = require('express-handlebars');
var katex = require('parse-katex');
var bodyParser = require('body-parser');
var app = express();
var server  = http.createServer(app); //required fro socket.io
var io= require('socket.io').listen(server);


app.use(bodyParser.json());
//var handlebars=exphbs.create({extname: '.html'});

//app.engine('html', handlebars.engine);
app.engine('html', katex.templateEngine);
app.set('view engine', 'html');

//app.use('/assets', express.static('semantic'));
app.use('/assets', express.static('assets'));
app.use('/assets', express.static('node_modules'));


app.get('/', function (req, res) {
    res.render('index');
});
/*app.get('/Projects', function (req, res) {
    res.send({projects:"wassup"});
});*/
io.on('connection', function(socket){
  socket.on('projects', function(data){
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

});
/*app.post('/projects/*', function(req, res){ //use this for loading projects
  var fork = require('child_process').fork; //asynced child process
  console.log(req.params[0]);
  var child=fork('node_modules/'+req.params[0]+'.js');
  child.send(msg);
  child.on('message', function(data){
      var key=Object.keys(data)[0];
      io.emit(key, data[key]);
  });
});*/
app.post('/stock', function(req, res){
  var stock=req.body.stock;
  //console.log(stock);http://finance.yahoo.com/webservice/v1/symbols/'+stock+'/quote?format=json
  http.get('http://finance.google.com/finance/info?client=ig&q='+stock+'&callback=?', function(result){
    var data="";
    result.on("data", function(chunk) {

      data=data+chunk;
    });
    result.on('end', function() {
       res.send(data);//.list.meta.resources[0].resource.fields);
    });


    //res.send(result);
  });
});

server.listen(4000);
