const Customer = require('../model/customerSchema');

/*
POST -> save
PUT -> update
GET -> fetch
DELETE -> remove
*/

const saveCustomer = (req, resp) => {
    const tempCustomer = new Customer({
        //  
        name: req.body.name,
        address: req.body.address,
        salary: req.body.salary
    });

    tempCustomer.save()
        .then(result => {
            resp.status(201).json({ status: true, message: 'Customer was saved' });
        })
        .catch(error => {
            resp.status(500).json(error);
        });
};

const findCustomer = (req, resp) => {
    Customer.findOne({ nic: req.headers.nic })
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

const deleteCustomer=async (req,resp)=>{
    const deleteData = await Customer.findByIdAndDelete({'_id':req.params.id});
    if(deleteData){
        return  resp.status(204).json({'message':'deleted'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }
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


// const findAll = async (req, resp) => {
//     try {
//         const { searchText, page = 1, size = 10 } = req.query;

//         const pageNumber = parseInt(page);
//         const pageSize = parseInt(size);

//         const query = {};
//         if (searchText) {
//             query.$text = { $search: searchText };
//         }

//         const skip = (pageNumber - 1) * pageSize;
//         const response = await Customer.find(query).limit(pageSize).skip(skip);
//         return resp.status(200).json(response);
//     } catch (error) {
//         console.log(error);
//         return resp.status(500).json({ 'message': 'Internal server error' });
//     }
// };

module.exports = {
    saveCustomer,
    findCustomer,
    updateCustomer,
    deleteCustomer,
    findAllCustomers
    // findAll,
};
