var http = require('http');
var url = require('url');
var fs = require('fs');
var word=require('./word.js');
var word2=require('./word2.js');
var cors = require('cors');
var { parse } = require('querystring');

http.createServer(function(req,res){



if (req.method === 'POST') {
    var body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        console.log(
            parse(body)
        );
        res.end('ok');
    });
}
    
    var q=url.parse(req.url, true);
    var qdata=q.query;
    console.log( "request body : "+req.body);
     //qdata=req.body.wordSearch;
        if (q.pathname == "/word") {  
         word.search(req, res, qdata);
         }
        else if(q.pathname == "/word2.js"){ 
            word2.search(req, res, req.body.what); 
            console.log("this is the object to be send:" );
            console.log(qdata); 
           
        }       
        else if(q.pathname == "/"){
        
            fs.readFile('dict.html', function(err, data) {
                if(err){console.log("erro");}
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
             res.end();
            });
        }

 
// else
// fs.readFile(filename, function(err, data) { if (err) {
// res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }
// res.writeHead(200); // Content-Type not included 
// res.write(data);
// return res.end();
//   });
// }).listen(8020);
}).listen(8097);