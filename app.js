// const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize Yargs version
yargs.version('1.2.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        notes.showNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.parse()

//console.log(yargs.argv)

// if (command === 'add') {
//     console.log('uppp')  
// } else if (command === 'remove') {

// }

//const command = process.argv

//const myNotes = notes()

//console.log(myNotes)

// console.log(validator.isEmail('alan@teste.com'))
// console.log(validator.isURL('https://alan.com'))

//console.log(chalk.green.inverse.bold('Success!'));


