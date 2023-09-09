const express = require('express');
const router = express.Router();
const { getUsers, getProducts, getCategories, postRepair } = require('../controllers');


router.get('/users', getUsers);

router.get('products', getProducts);

router.get('categories', getCategories);
  
  router.post('repair', postRepair);
  
 

module.exports = router;