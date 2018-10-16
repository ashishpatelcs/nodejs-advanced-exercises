const fs = require('fs')

let readFileSynchronously = () => {
    /* function: readFileSync: (file, options)
     *
     * return type: Buffer (if without encoding)
     */

     let myFile = fs.readFileSync('example.txt')
}

let readFileAsynchronously = () => {

}

let readDirectorySynchronously = () => {

}

let readDirectoryAsynchronously = () => {

}

module.exports = {
    readFileSynchronously,
    readFileAsynchronously,
    readDirectorySynchronously,
    readDirectoryAsynchronously
}