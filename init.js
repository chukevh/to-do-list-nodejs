const mongoose = require("mongoose")
const Todolist = require('./models/todolist')
mongoose.connect("mongodb://127.0.0.1:27017/todolistdb")


async function init() {
    try {
        const todolist = await Todolist.create({})
        console.log(todolist)
    } catch (err) {
        console.log(err.message)
    }
}

init()