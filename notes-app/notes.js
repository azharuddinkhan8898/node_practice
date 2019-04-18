const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title == title )
    if(duplicateNotes == 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note taken"));
    } else {
        console.log(chalk.red.inverse("Title aleady taken!"))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes();
    const updatedNotes = notes.filter((note) =>  !(note.title == title) )
    saveNotes(updatedNotes)
    if(notes.length > updatedNotes.length){
        console.log(chalk.green.inverse("Note removed!"))
    } else{
        console.log(chalk.red.inverse("No note found!"))
    }
    
}

const listNotes = () => {
    console.log(chalk.green.inverse("Your notes"));
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => {
        return note.title == title
    })
    if(note){
        console.log(chalk.green.inverse.bold(note.title))
        console.log(note.body);
    }
    else{
        console.log(chalk.red.inverse("Note not found"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return []
    }
    
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
};