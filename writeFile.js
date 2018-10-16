const fs = require('fs')

let writeFileSynchronously = () => {
    let data = Math.random()*1000000
    fs.writeFileSync('write.txt', data)
    console.log('file written');
}

let writeFileAsynchronously = () => {
    let data = Math.random()*1000000
    fs.writeFile('write.txt', data, (err) => {
        if (err) console.log(err);
        else console.log('file written!');
    })
}

module.exports = {
    writeFileAsynchronously,
    writeFileSynchronously
}