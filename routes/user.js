var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient
const productHelpers = require('../helpers/product-helpers');

/* GET home page. */

  router.get('/', function(req, res, next) {
    productHelpers.getAllProducts().then((products)=>{
      res.render("index",{products,admin:false})
    })

  
 
  });

router.post('/submit',function(req,res){

  MongoClient.connect('mongodb://localhost:27017/',function(err,client){
    if(err){
      console.log(err);
    }else{
      client.db('sookart').collection('users').insertOne(req.body)
    }
  })
  
  res.send('got it')
})

module.exports = router;
