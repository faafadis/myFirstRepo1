// // const express = require('express');
// // const mysql = require('mysql');
// // const app = express();
// // const connenction = mysql.createConnection(
// //    {
// //     host: "localhost",
// //     user: "root",
// //     password: "",
// //     database: "filmon",
// //     port: "3306"
// //    }
// // );
// //  connenction.connect((err)=>{
// //      if(err){
// //          throw err
// //      }
// //      else{
// //          console.log("connected");
// //      }
// //  });
// // const port = process.env.port || 5000;
// // app.listen(port);

// // console.log('app is listning on' + port);

// const express = require('express');
// const mysql = require('mysql');

// const app = express();

// var connection =mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"password",
//     database:"test_db",
//     port:"3306"
// })

// connection.connect((err) =>{
//     if(err){
//         throw err
//     } else{
//         console.log("connected")
//     }
// });
// 

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   /*Create a database named "mydb":*/
//   con.query("CREATE DATABASE mydb2", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });


var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "myusername",
    password: "",
    database: "mydb"
  });
  
  