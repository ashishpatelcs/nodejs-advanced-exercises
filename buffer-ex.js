/*
Complete the function to read the text from buffer.txt and 
return the result as buffer.

*/

const fs = require('fs');
const Buffer = require('buffer').Buffer;


let readBufferFile = ()=>{
    let file = fs.readFileSync('example.txt', 'utf-8');
    let buffer = Buffer.from(file);
    return buffer;
};


module.exports = {readBufferFile:readBufferFile};