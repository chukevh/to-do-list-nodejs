const mongoose = require('mongoose')

const todolistSchema = new mongoose.Schema({
    items: {
        type: [String],
        required: true,
        default: []
    }
    
})

todolistSchema.methods.addItem = function(item) {
    if (this.items.filter((x) => x === item) != item) {
        this.items.push(item)        
    } else {
        console.log("Item already exists")
    }
}

todolistSchema.methods.deleteItem = function(item) {
    let index = this.items.indexOf(item)
    if (index === -1) {
        return console.log("Error, item not found")
    } else {
        this.items.splice(index, 1)
    }
}

module.exports = mongoose.model('Todolist', todolistSchema)