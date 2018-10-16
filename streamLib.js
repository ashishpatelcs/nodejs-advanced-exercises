const fs = require('fs')

let readFileStream = () => {
    let filestream = fs.createReadStream('bigtext.txt', 'utf-8')
    filestream.on('data', chunk => {
        console.log(chunk);
    })

    filestream.on('end', () => {
        console.log('file read successfuly!');
    })
}

let writeFileStream = () => {
    let writestream = fs.createWriteStream('bigtext.txt')
    for (let i = 0; i < 1000000; i++) writestream.write(String(Math.random()*1000000))
    writestream.end( () => console.log('file write end'))
}

let copyFile = () => {
    let readfile = fs.createReadStream('example.txt', 'utf-8')
    let writefile = fs.createWriteStream('write.txt')
    readfile.on('data', chunk => {
        writefile.write(chunk)
    })

    readfile.on('end', () => {
        console.log('file copied successfully')
        writefile.end()
    })
}

// implement a readable stream
let createReadableStream = () => {
    let { Readable } = require('stream')
    const inputStream = new Readable()
    inputStream.push('hello')
    inputStream.push('world!')
    inputStream.push(null) // no more data to push
    inputStream.pipe(process.stdout)
}

let createWritableStream = () => {
    let { Writable } = require('stream')
    const outputStream = new Writable({
        write(chunk, encoding, callback) {
            console.log('Raw input is : ' + chunk)
            console.log('Encoded input is : ' + chunk.toString());
            callback()
        }
    })
}

module.exports = {
    readFileStream,
    writeFileStream,
    copyFile,
    createReadableStream,
    createWritableStream
}