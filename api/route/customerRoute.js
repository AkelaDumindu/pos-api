const express = require('express');
const CustomerController = require('../controller/customerController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// router.post('/save-customer', verifyToken, CustomerController.saveCustomer);
router.post('/save-customer', verifyToken, CustomerController.saveCustomer);
// router.get('/find-customer', verifyToken, CustomerController.findCustomer);
router.get('/find-customer/:id', verifyToken, CustomerController.findCustomer);
// router.put('/update-customer', verifyToken, CustomerController.updateCustomer);
router.put('/update-customer/:id', verifyToken, CustomerController.updateCustomer);
// router.delete('/delete-customer', verifyToken, CustomerController.deleteCustomer);
// router.delete('/delete-customer', CustomerController.deleteCustomer);
router.delete('/delete-by-id/:id', verifyToken, CustomerController.deleteCustomer);
// router.get('/find-all-customer', verifyToken, CustomerController.findAllCustomers);
router.get('/find-all-customer', verifyToken, CustomerController.findAllCustomers);
router.get('/find-all-count', verifyToken, CustomerController.findAllCount);

module.exports = router;
