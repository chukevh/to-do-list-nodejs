const { Command } = require('commander')
const program = new Command();
const Todolist = require('./models/todolist')
const {
    listItems,
    addItem,
    deleteItem
    } = require('./index')


program
    .name('to-do-list')
    .description('CLI to create to do list')
    .version('1.0.0')

program
    .command('list')
    .description('List all items')
    .alias('l')
    .action(() => listItems())

program
    .command('add <item>')
    .description('Add item')
    .alias('a')
    .action((item) => {
        addItem(item)
    })

program
    .command('delete <item>')
    .description('Delete item')
    .alias('d')
    .action((item) => {
        deleteItem(item)
    })


program.parse()