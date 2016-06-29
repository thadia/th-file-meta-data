var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var path = require('path');
var util = require('util'); 
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.get('/api/imagesearch/*', function(req_g,res_g) {
         // https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10
    res_g.json(results);
          
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


