var server = require('express');
var port = process.env.PORT || 3500;
var app = server();
var path = require('path');
var multer  = require('multer');
var upload = multer({ dest: './upload' });

app.listen(port, function(){ 
  console.log('Ready: ' + port);
  });

app.post('/upload', upload.single('file'), function (req, res) {
  console.log("File size" + req.file.size);
  res.json({file_name: req.file.name, size: req.file.size});

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


