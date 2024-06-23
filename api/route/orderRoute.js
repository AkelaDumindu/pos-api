const express = require('express');
const OrderController = require('../controller/orderController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// router.post('/save-customer', verifyToken, ProductController.createProduct);
router.post('/save-order', OrderController.createOrder);
// router.get('/find-customer', verifyToken, ProductController.findProduct);
router.get('/find-product/:id', OrderController.findOrder);
// router.put('/update-customer', verifyToken, ProductController.updateProduct);
router.put('/update-product/:id', OrderController.updateOrder);
// router.delete('/delete-customer', verifyToken, ProductController.deleteProduct);
// router.delete('/delete-customer', ProductController.deleteProduct);
router.delete('/delete-by-id/:id', OrderController.deleteOrder);
// router.get('/find-all-customer', verifyToken, ProductController.findAllProduct);
router.get('/find-all-product', OrderController.findAllOrder);


// router.get('/find-all-min',verifyUser, ProductController.findAllMin);
// router.get('/find-all-count',verifyUser, ProductController.findCount);
router.get('/find-all-income',OrderController.findAllIncome);
router.get('/find-all-count', OrderController.findAllCount);

module.exports = router;