
  var cors = require('cors');
exports.search =function(req, res,vals){        
 
    
    var mysql = require('mysql');
    
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysqlmysql",
        database: "entries"
    });

con.connect(function(err) {
    if (err) throw err;
    var sqlquery = `SELECT definition FROM entries.entries  where word = '${vals.wordSearch}'`;
    
    con.query(sqlquery,test);
});


 function test(err, result){
    
        if (err) {
            throw err; 
            }
            console.log("final response");
            console.log(result);
            // res.header("Access-Control-Allow-Origin", "*");
            // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           //res.writeHead(200, {'Content-Type': 'text/html'});

         

           
           
          
           
           res.setHeader('Access-Control-Allow-Origin', '*');
           res.setHeader('Access-Control-Request-Method', '*');
           res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
           res.setHeader('Access-Control-Allow-Headers', '*');
           

           

        
    //    res.json(result);
      res.write(JSON.stringify(result));
     // console.log(JSON.stringify(result));
              res.end();
  
     
     
 } 
};