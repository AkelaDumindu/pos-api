const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    customerDetails:{
        type:Object,
        required:true
    },
    totalCost:{
        type:Number,
        required:true
    },
    products:{
        type:Array,
        required:true
    }
    
});

module.exports = mongoose.model('product', ProductSchema);