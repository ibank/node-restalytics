require('restalytics').apiKey('YOUR API KEY HERE');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var links = '';
  ['foo', 'bar', 'baz'].forEach(function(s) {
    links += '<li><a href="/' + s + '">' + s + '</a></li>';
  });

  setTimeout(function() {
    res.end('<html><head><meta http-equiv="refresh" content="3"></head><body><h1>' + req.url + '</h1>Click any link and watch your RESTalytics dashboard:<ul>' + links + '</ul></body></html>');
  }, Math.floor(Math.random() * 100));
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
