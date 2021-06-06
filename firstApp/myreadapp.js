 var http = require('http');
 var fs =require('fs')

const { type } = require('os');
 http.createServer(function(req, res){
   fs.readFile('exercise4.html', function(err, data){
      res.writeHead(200,{'Content-Type': 'text/html'} );
      res.write(data);
      return res.end();

   });

  
 }).listen(8088);
