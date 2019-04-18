const chalk = require("chalk");
const notes = require("./notes")
const yargs = require("yargs");
const fs = require("fs");

// yargs.version("1.1.0");

//create add command
yargs.command({
    command:"add",
    discribe: "add a new note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:"remove",
    discribe: "remove a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    } 
})

//create list command
yargs.command({
    command:"list",
    discribe: "list notes",
    handler(){
        notes.listNotes();
    }
})


//create read command
yargs.command({
    command:"read",
    discribe: "read a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    } 
})

yargs.parse();