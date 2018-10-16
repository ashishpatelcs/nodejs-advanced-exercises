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

module.exports = {
    readFileStream,
    writeFileStream,
    copyFile
}