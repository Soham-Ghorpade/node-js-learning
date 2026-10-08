const FileSysteam = require('node:fs');
console.log("Starting the Script");

const read = FileSysteam.readFileSync("sample.txt",'utf-8');
console.log(read);

console.log("Ending Of Script");

