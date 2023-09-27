const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    todolist: mongoose.Schema.ObjectId
})

module.exports = mongoose.model('Customer', customerSchema)