/*1) What is node?
In the older days, use javascript just for building things for the browser, only the browser can read javascript

Node give us the ability to use javscript just to build things like java or python
Create files, folder, database

Back in the day if you want to build things, a web application, u need to know javascript
But if you want to do things like file uploading, you need to know different technology like php, to upload a file to the server
With node, it is possible to do these just with javscript

TODO 1 (Node Intro)
1)Go to command prompt
2)Type node
3)Type the following line and enter after each line
var array = []; //undefined
array.push('john','peter') //2
array //['john','peter']
Work just like normal javascript
*/

/*
TODO 2 (Hello World)
Use node app.js to execute the hello world below
console.log('hello world')
*/

/*
TODO 3 (Global Object)
Console log 
node 
global //Give me a big big object regarding node
*.

/*
TODO 4 (OS - Accessing information about the computer)
const os = require('os')
let user = os.userInfo();
let plat = os.platform();
console.log(plat)
*/

/*
TODO 5 (Read & Write files)
const os = require('os');
const fs = require('fs');
const userData = require('./user.js');

console.log(userData);

let user = os.userInfo();
let date = new Date();

let message = `User "${user.username}" started APP at ${date}` 
fs.appendFile("hello.txt", message,(err) => {
    if (err) {
        console.log("Appending file error")
    }
})
*/

/*
TODO 6 (Node Package Manager)
command prompt
npm init //press enter to go through details to generate a package.json file
npm install -g nodemon //listen to change and auto update instead of node app.js everytime
open new tab and type nodemon app.js 
*/

/*
TODO 7 (Blocking / Non-blocking)
I/O - Input/Output

7.1) Blocking/ Non blocking
let url = "http://googlemap//.."
Network request - server 
Read file(log.txt) - fetch file
Function 

7.2) The call stack, API, event loop and event queue
Thread - Timeline where program executes
Javascript - Single thread, one piece of code at a time

*/