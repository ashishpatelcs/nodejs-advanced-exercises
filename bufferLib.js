const buffer = require('buffer').Buffer

let allocateBuffer = () => {
    //let allocbuffer = buffer.alloc(8)
    let allocbuffer = new Int8Array(8)
    console.log(allocbuffer)
}

let bufferFromText = () => {
    let text = `Hello World
    Application is the first Application I've written!`
    let textbuffer = Buffer.from(text)
    // let textbuffer = new Int8Array(text)
    console.log('Text buffer: ');
    console.log(textbuffer);
}

let writeToBuffer = (data) => {
    let allocbuffer = buffer.alloc(8)
    // let allocbuffer = new Int8Array(8)
    console.log('current buffer: ');
    console.log(allocbuffer);
    allocbuffer.write(data)
    console.log('new buffer: ');
    console.log(allocbuffer);
}

let readFromBuffer = () => {
    let allocbuffer = buffer.alloc(16)
    // let allocbuffer = new Int8Array(8)
    allocbuffer.write('hello world!')
    console.log(allocbuffer.toString('ascii', 0, 15))
}

// buffer operations
let compareBuffer = () => {
    let buffer1 = buffer.from('hello world')
    let buffer2 = buffer.from('hello world')
    let buffer3 = buffer.from('another buffer')
    console.log(buffer1.compare(buffer2));
    console.log(buffer1.compare(buffer3));
}

let comparePartOfBuffer = () => {
    let buffer1 = buffer.from('hello world')
    let buffer2 = buffer.from('hello world')
    let buffer3 = buffer.from('another buffer')
    console.log(buffer1.compare(buffer2, 0, buffer1.byteLength, 7));
    console.log(buffer1.compare(buffer3, 0, buffer1.byteLength, 7));
}

let copyBuffer = () => {
    let source = buffer.alloc(8).fill('hello world')
    let dest = buffer.alloc(8)
    source.copy(dest)
}

module.exports = {
    allocateBuffer,
    bufferFromText,
    writeToBuffer,
    readFromBuffer,
    compareBuffer,
    comparePartOfBuffer,
    copyBuffer
}