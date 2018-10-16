const fs = require('fs')

let readFileSynchronously = () => {
    /* function: readFileSync: (file, options)
     *
     * return type: Buffer (if without encoding)
     */

     let myFile = fs.readFileSync('example.txt')
     console.log(myFile);

     let encodedFile = fs.readFileSync('example.txt', 'utf-8')
     console.log(encodedFile);
}

let readFileAsynchronously = () => {
    fs.readFile('example.txt', (err, myFile) => {
        console.log(myFile);
    })
   
    fs.readFile('example.txt', 'utf-8', (err, encodedFile) => {
        console.log(encodedFile);
    })
    
}

let readDirectorySynchronously = () => {
    let dir = fs.readdirSync('/')
    console.log(dir);
}

let readDirectoryAsynchronously = () => {
    fs.readdir('/', (err, files) => {
       for (let file of files) {
           console.log('file name is: ' + file)
       }
    })
}

module.exports = {
    readFileSynchronously,
    readFileAsynchronously,
    readDirectorySynchronously,
    readDirectoryAsynchronously
}