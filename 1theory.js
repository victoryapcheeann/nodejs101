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

Javascript - Single thread, one piece of code at a time (One thing at a time)
Multi thread - More process power, more resources (Different topics)

7.2.1) Single Thread Example
function number() {console.log('hello')}
number();
function name() {console.log('henry')}
name();
function symbol {console.log('$)}
symbol();

7.2.2) Call Stack (It is a stack of things, functions within functions)
function getRandom(){return Math.random()};
function getResult(n){return n * getRandom()};
function printResult(n){
    let result = getResult(n);
    console.log(result);
}
printResult(10)

7.2.3) Infinite loop
function message(){message()};
message();
RangeError: Maximum call stack size exceeded

7.2.4) Call Stack, API, event queue, event loop
function message(){console.log('message)}
message();
setTimeout(function(){console.log('deferred')}, 5000)
console.log('message')

7.2.5) Sync code, everything not ran in parallel
function message(){console.log('message)}
message();
setTimeout(function(){console.log('deferred')}, 0)
setTimeout(function(){console.log('deferred')}, 0)
setTimeout(function(){console.log('deferred')}, 0)
console.log('message')
*/

/*
TODO 8) Nodejs
When you buy computer, you want to buy a computer
You look at the RAM, monitor, keyboard, micro-processor
The processor is the brain of our machine that is going to receive instructions and perform a task
Better processor, better computer, x86/64 ARM and MIPS

The difference is the language that they might speak
The processor will receive some instructions in a language that they can understand
and the language is going to be machine code
After receiving the instructions it will do something

Machine code is really really hard to write and read
Whenever we use node, we use javascript, not machine language
So when we code, it is complied to machine code because processor only understand machine code
Node complies js to machine code?
Yes & no

In the past we had machine code than just raw code
Then other things come up to make things easier
Assembly (Still hard to read and write)
C, C++ (Big big break)
Node is going to be written in C++
It is going to take the javascript code complies the code into machine code
How it complies?
By using the v8, v8 is bulit in c++
Javascript -> nodeJS -> v8 -> machine code
*/

/*
TODO 9) Servers & Clients
Servers - Accept task to do, waiting until somebody or something asks him something to do
Client - Ask the things to do
Request - Ask the server for something
Response - Do something and send back the data or error
HTTP - Talk to each other in a language they can understand

You need to know at least two different languages to make things work
Client brower - JS
Web server - Ruby, PHP
This is bad, why not doing everything with one language
Here comes Nodejs
This is isomorphic javascript, do everything with one language
*/

/*
TODO 10) Server - Create a server with nodejs, express

*/