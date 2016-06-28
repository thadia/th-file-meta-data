var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var search = require('bing.search');
var path = require('path');
var util = require('util'); 
 
var search_it = new search('hAesGkyxDUEtkrw+n6hDlxBtoZHRnU5QQ6FJvlKqxhk');

 
app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/api/imagesearch/', function(req_g,res_g) {
 // https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10
 
search_it.images('cats',
  {top: 5},
  function(err, results) {
    console.log(util.inspect(results,{colors: true, depth: null}));
    res_g.json(results);
  }
);


});

app.get('/:tiny', function(req,res) {

   
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


