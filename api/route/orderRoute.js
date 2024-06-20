const express = require('express');
const ProductController = require('../controller/orderController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// router.post('/save-customer', verifyToken, ProductController.createProduct);
router.post('/save-product', ProductController.createOrder);
// router.get('/find-customer', verifyToken, ProductController.findProduct);
router.get('/find-product/:id', ProductController.findOrder);
// router.put('/update-customer', verifyToken, ProductController.updateProduct);
router.put('/update-product/:id', ProductController.updateOrder);
// router.delete('/delete-customer', verifyToken, ProductController.deleteProduct);
// router.delete('/delete-customer', ProductController.deleteProduct);
router.delete('/delete-by-id/:id', ProductController.deleteOrder);
// router.get('/find-all-customer', verifyToken, ProductController.findAllProduct);
router.get('/find-all-product', ProductController.findAllOrder);


// router.get('/find-all-min',verifyUser, ProductController.findAllMin);
// router.get('/find-all-count',verifyUser, ProductController.findCount);
router.get('/find-all-income', ProductController.findAllIncome);
router.get('/find-all-count', ProductController.findAllCount);

module.exports = router;