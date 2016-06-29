var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var path = require('path');
var util = require('util'); 
var multer  = require('multer');
var upload = multer({ dest: 'upload/' });

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

  app.post('/upload', upload.single('avatar'), function (req, res) {

       res.json(req.body);
    // req.file is the `avatar` file 
    // req.body will hold the text fields, if there were any 

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


