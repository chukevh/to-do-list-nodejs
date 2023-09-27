// To do list for users
const mongoose = require("mongoose")
const Todolist = require('./models/todolist')
var db = mongoose.connect("mongodb://127.0.0.1:27017/todolistdb")

async function listItems() {
    const todolist = await Todolist.findById("65142e55d755e2d3857eea07")
    console.log(`Current to do items: ${todolist.items}`)
    mongoose.connection.close()
}

async function addItem(item) {
    const todolist = await Todolist.findById("65142e55d755e2d3857eea07")
    todolist.addItem(item)
    await todolist.save()
    listItems()
}

async function deleteItem(item) {
    const todolist = await Todolist.findById("65142e55d755e2d3857eea07")
    todolist.deleteItem(item)
    await todolist.save()
    listItems()
}

module.exports = { listItems, addItem, deleteItem }