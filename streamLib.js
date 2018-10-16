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

module.exports = {
    readFileStream,
    writeFileStream
}