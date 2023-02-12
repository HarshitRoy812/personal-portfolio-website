const mongoose = require('mongoose');

const userComments = new mongoose.Schema({
    name : String,
    comment : String
})

module.exports = mongoose.model('Comments',userComments);