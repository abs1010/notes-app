//const { NODATA } = require('dns')
const chalk = require('chalk')
const fs = require('fs')

const print = console.log

// Add Notes
const addNote = (title, body) => {
    const notes = loadNotes()
    //const filtered = notes.filter((item) => item.title === title);
    const duplicateNote = notes.find((item) => item.title === title);

    //if (filtered.length > 0) {
    if (duplicateNote) {
        console.log(chalk.red.bold('Note already exist!'));
        return
    }

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log(chalk.green.inverse.bold('Note was added!'));
}

// Load notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// Save Notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// Show all Notes
const showNotes = () => {
    console.log(chalk.yellow.inverse.bold('All your notes!'));
    loadNotes().forEach( element => {
        print(element)
    });
}

// Remove notes
const removeNote = (title) => {
    const notes = loadNotes()
    const filtered = notes.filter( (item) => item.title === title);

    if (filtered.length > 0) {

        const remainingNotes = notes.filter( (item) => {
            return item.title !== title
        });

        saveNotes(remainingNotes)
        console.log(chalk.green.inverse.bold('Note was successfully removed!'));

    } else {
        console.log(chalk.red.bold('No note was found!'));
    }

}

// Read notes
const readNote = (title) => {
    const notes = loadNotes()
    const filtered = notes.find( (item) => item.title === title);
    console.log(filtered ? chalk.inverse.bold(filtered.title) : chalk.red.inverse.bold('No note with this title was found!'));
}

module.exports = {
    addNote: addNote,
    showNotes: showNotes,
    removeNote: removeNote,
    readNote: readNote
}