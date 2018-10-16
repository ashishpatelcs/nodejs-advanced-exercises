const cluster = require('cluster')
const http = require('http')

const nocpus = require('os').cpus().length

let createServer = () => {
    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running!`);

        // fork workers
        for (let i = 0; i < nocpus; i++) {
            cluster.fork()
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died!`);
        })
    } else {
        http.createServer((req, res) => {
            res.writeHead(200)
            res.end('Hello World!\n')
        }).listen(3000)

        console.log(`Worker ${process.pid} started!`);
    }
}

createServer()

/*
 * npm modules to load test: loadtests
 */