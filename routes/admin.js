var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    productHelpers.getAllProducts().then((products)=>{
      res.render("admin/view-products",{products,admin:true})
    })

  
 
  });

  router.get('/add-product',(req,res)=>{
    res.render('admin/add-product')
  })
  
  router.post('/add-product',(req,res)=>{
    console.log(req.body);
    console.log(req.files.image);
    
    productHelpers.addProduct(req.body,(insertedId)=>{
      let image=req.files.image
      var id=insertedId
      image.mv('./public/product-images/'+id+'.jpg')
      
      res.render("admin/add-product")
        
      
      
    })
    
  })



module.exports = router;
