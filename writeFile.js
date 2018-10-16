const fs = require('fs')
let x = 1000000

let writeFileSynchronously = () => {
    let data = Math.random()*x
    fs.writeFileSync('write.txt', data)
    console.log('file written');
}

let writeFileAsynchronously = () => {
    let data = Math.random()*x
    fs.writeFile('write.txt', data, (err) => {
        if (err) console.log(err);
        else console.log('file written!');
    })
}

module.exports = {
    writeFileAsynchronously,
    writeFileSynchronously
}