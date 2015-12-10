var fs            = require('fs');
var express       = require('express');
var path          = require('path');
var logger        = require('morgan');
var bodyParser    = require('body-parser');

var app           = express();
var COMMENTS_FILE = path.join(__dirname, 'comments.json');


app.set('port', '3000');
app.set('ipaddr', 'localhost');

app.use(express.static(path.join(__dirname, 'public')));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/comments', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    comments.push(newComment);
    fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(comments);
    });
  });
});










var server = app.listen(app.get('port'), app.get('ipaddr'), function() {
  console.info('Express server listening on port ' + server.address().port);
});

module.exports = app;
