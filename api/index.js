const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const customerRoute = require('./route/customerRoute');
const userRoute = require('./route/userRoute');

const app = express();
const port = process.env.SERVER_PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/customer_crud')
.then(() => {
    app.listen(port, () => {
        console.log(`API started & running on port ${port}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});

// Root route
app.get('/', (req, resp) => {
    resp.send('<h1>Server Works!</h1>');
});

// Customer route
app.use('/api/v1/customers', customerRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;
