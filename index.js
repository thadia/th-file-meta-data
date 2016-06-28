var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var search = require('bing.search');
var path = require('path');
var util = require('util'); 
var mongoose = require('mongoose');

 
var search_it = new search('hAesGkyxDUEtkrw+n6hDlxBtoZHRnU5QQ6FJvlKqxhk');

 
app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/api/imagesearch/*', function(req_g,res_g) {
 // https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10


console.log(req_g.params[0]); 
search_it.images(req_g.params[0],
  {top: 5},
  function(err, results) {
    if (err) {
      console.log(err);
      res_g.status(err.status).end();
    }
    else{
      console.log(util.inspect(results,{colors: true, depth: null}));
      res_g.json(results);
    }
  }
);

});

app.get('/api/imagesearch/*', function(req_g,res_g) {
 // https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10
console.log(req_g.params[0]);
//if(req_g.query.offset !== undefined) { top_default = req_g.query.offset }
//console.log("DEFAULT: "   + req_g.query);

search_it.images(req_g.params[0],
  {top: 5},
  function(err, results) {
     if (err) {
      console.log(err);
      res_g.status(err.status).end();
    }
    else{
      console.log(util.inspect(results,{colors: true, depth: null}));
      res_g.json(results);
    }
  }
);
});


app.get('/api/latest/imagesearch/', function(req_g,res_g) {
  
  res_g.json({
    term:"lolcats funny",
    time:"2016-06-28T14:46:50.042Z"
  });
   
});


app.get('/', function(req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});


