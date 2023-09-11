const express = require('express');
const router = express.Router();
const { getUsers, getProducts, getCategories, postRepair, createProduct, adminController } = require('../controllers');


router.get('/users', getUsers);

router.get('/products', getProducts);

router.get('/categories', getCategories);
  
  router.post('/repair', postRepair);

  router.post('admin/products', createProduct);
  
 router.post('/admin/login', adminController.login);

module.exports = router;