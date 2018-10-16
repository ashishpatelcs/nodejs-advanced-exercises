/* express cluster example
 * please instal npm i express-cluster
 */

 const express = require('express')
 const cluster = require('express-cluster')
 const util = require('util')
 
 cluster(function(worker) {
     let app = express()
     app.get('/', (req,res) => {
         console.log('current worked : ' + worker.id);
         res.send('Hello from worker ' + worker.id)
     })
     return app.listen(3000)
 }, {count: 5})