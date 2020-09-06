// init project
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (req, res) {
  console.log(req.headers);
  res.sendFile(__dirname + '/view/index.html');
});

app.get("/api/whoami", (req, res) => {
  res.json({ ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress, language: req.headers['accept-language'], software: req.headers['user-agent'] });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
