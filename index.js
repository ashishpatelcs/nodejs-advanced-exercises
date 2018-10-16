const readfs = require('./readFile')
const writefs = require('./writeFile')
const stream = require('./streamLib')
const buffer = require('./bufferLib')
const path = require('path')
const os = require('os')

// readfs.readDirectoryAsynchronously()
// console.log(writefs.writeFileSynchronously.toString())
// writefs.writeFileAsynchronously()
// console.log(module)
// console.log(exports)
// console.log(require.toString());
/* 
console.log(path.parse(__filename))
let totalMem = os.totalmem(), freeMem = os.freemem()
let fmemp = (freeMem / totalMem) * 100
let Mb = Math.pow(10, 6)
console.log(`Total memory in the system: ${Math.floor(totalMem / Mb)}`);
console.log(`Free memory in the system: ${Math.floor(freeMem / Mb)}`);
console.log('Amount of free memory in % : ' + fmemp);

 */

// stream.writeFileStream()
// stream.createReadableStream()
buffer.readFromBuffer()