const Product = require('../model/productSchema');

/*
POST -> save
PUT -> update
GET -> fetch
DELETE -> remove
*/

const saveProduct = (req, resp) => {
    const tempProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        qtyOnHand: req.body.qtyOnHand,
        unitPrice: req.body.unitPrice
    });

    tempProduct.save()
        .then(result => {
            resp.status(201).json({ status: true, message: 'Product was saved' });
        })
        .catch(error => {
            resp.status(500).json(error);
        });
};

const findProduct = (req, resp) => {
    Product.findOne({ nic: req.headers.nic })
        .then(result => {
            if (result == null) {
                resp.status(404).json({ status: false, message: 'Customer not found' });
            } else {
                resp.status(200).json({ status: true, data: result });
            }
        })
        .catch(error => {
            resp.status(500).json(error);
        });
};

const updateCustomer = (req, resp) => {
    Customer.updateOne({ nic: req.headers.nic }, {
        $set: {
            name: req.body.name,
            address: req.body.address,
            salary: req.body.salary
        }
    })
        .then(result => {
            if (result.modifiedCount > 0) {
                resp.status(201).json({ status: true, message: 'Customer updated successfully' });
            } else {
                resp.status(200).json({ status: false, message: 'Try again' });
            }
        })
        .catch(error => {
            resp.status(500).json(error);
        });
};

const deleteCustomer = (req, resp) => {
    Customer.deleteOne({ nic: req.headers.nic })
        .then(result => {
            if (result.deletedCount > 0) {
                resp.status(204).json({ status: true, message: 'Customer deleted successfully' });
            } else {
                resp.status(400).json({ status: false, message: 'Try again' });
            }
        })
        .catch(error => {
            resp.status(500).json(error);
        });
};

const findAllCustomers = (req, resp) => {
    Customer.find({})
        .then(result => {
            resp.status(200).json({ status: true, data: result });
        })
        .catch(error => {
            resp.status(500).json(error);
        });
};

module.exports = {
    saveCustomer,
    findCustomer,
    updateCustomer,
    deleteCustomer,
    findAllCustomers
};
