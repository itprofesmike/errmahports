var net = require('net');
var client = net.connect({port: 80, host: 'www.google.com'},
    function() { //'connect' listener
  console.log('client connected');
  client.write('GET / HTTP/1.0\r\nFROM: admin@errmahports\r\n\r\n');
});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('client disconnected');
});
