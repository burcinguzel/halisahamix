
//
var http = require('http');
var path = require('path');

var express = require('express');


//
var router = express();


router.use(express.static(path.resolve(__dirname, 'client')));


router.get("/",function(req,res){
  
  res.send("hello");
});



router.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
