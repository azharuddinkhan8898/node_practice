const fs = require("fs");

// const book = {
//     title:"Ego is the enemy",
//     author:"Ryan"
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON)

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON)

// console.log(data.title)

const JSONdata = (fs.readFileSync("1-json.json")).toString();
const dataObj = JSON.parse(JSONdata)
dataObj.name = "azhar";
dataObj.age = 24;

fs.writeFileSync("1-json.json", JSON.stringify(dataObj))