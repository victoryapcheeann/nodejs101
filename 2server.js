//TODO 10) Server - Create a server with nodejs, express

/* //10.1) Send to plain text
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello dude, i am a response');
})

server.listen(8181, '127.0.0.1');
console.log('server is running on port 8181')
//10.1) End */

//Nodemon server.js, Go to http://localhost:8181/, Check it out
//You are not going to send some text, lets send some html 



/* //10.2) Send some html
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'}); //Change to html
    res.write(`
        <html>
            <body> 
                <h1 style="background:red">Hello there</h1>
            </body>
        </html>
    `);
    res.end();
})

server.listen(8181, '127.0.0.1');
console.log('server is running on port 8181')
//10.2) End */



 /* //10.3) Get html file content and send it
 const http = require('http');
 const fs = require('fs');

 let HTML = fs.readFileSync('./2index.html')

 const server = http.createServer((req, res) => {
     res.writeHead(200, {'Content-type': 'text/html'}); //Change to html
     res.end(HTML);
 })

 server.listen(8181, '127.0.0.1');
 console.log('server is running on port 8181')
//10.3 End */



 //10.4) Json response
 //API - Application Programming Interface - Provide tools we can use to build our own software
 const http = require('http');
 const fs = require('fs');

 const server = http.createServer((req, res) => {
     res.writeHead(200, {'Content-type': 'text/application/json'}); //Change to application/json

        const json = JSON.stringify({
            name:'john',
            cars:['Ford','Tesla']
        })

     res.end(json.toString());
 })

 server.listen(8181, '127.0.0.1');
 console.log('server is running on port 8181')
//10.3 End */