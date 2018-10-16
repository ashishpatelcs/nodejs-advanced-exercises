const buffer = require('buffer').Buffer

let allocateBuffer = () => {
    let allocbuffer = buffer.alloc(8)
    console.log(allocbuffer)
}

let bufferFromText = () => {
    let text = `Hello World
    Application is the first Application I've written!`
    let textbuffer = Buffer.from(text)
    console.log('Text buffer: ');
    console.log(textbuffer);
}

let writeToBuffer = (data) => {
    let allocbuffer = buffer.alloc(8)
    console.log('current buffer: ');
    console.log(allocbuffer);
    allocbuffer.write(data)
    console.log('new buffer: ');
    console.log(allocbuffer);
}

let readFromBuffer = () => {
    let allocbuffer = buffer.alloc(16)
    allocbuffer.write('hello world!')
    console.log(allocbuffer.toString('ascii', 0, 15))
}

module.exports = {
    allocateBuffer,
    bufferFromText,
    writeToBuffer,
    readFromBuffer
}