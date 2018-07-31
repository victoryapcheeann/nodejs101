const express = require('express');
const app = express();
const queryString = require('querystring');
const fs = require('fs');

//http://localhost:3000/
/*
app.get('/', (req,res)=>{
    res.send(`
        <html>
            <body style="background:lightgreen">
                Hello world!
            </body>
        </html>
    `)
})
*/

//http://localhost:3000/api.user
app.get('/api/user', (req,res)=>{
    res.send({
        name:'Peter',
        job:["Manager","Father"]
    })
})  

//http://localhost:3000/api/john/300
app.get('/api/:user/:id', (req,res)=>{
    let userName = req.params.user;
    let id = req.params.id;
    res.send(`
    <html>
        <body style="background:lightpink">
           The user id is ${id} and the name is ${userName}
        </body>
    </html>
    `)
})

//http://localhost:3000/api/car?brand=john&year=2018
app.get('/api/car', (req,res)=>{
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand, year
    })
})

//middleware
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/', (req,res, next)=>{
    console.log(`someone made a request for` + req.url)
    res.cookie('cookiename','cookievalue') //Google express cookie middleware
    next() //need to call next if not your application will be frozen
})

app.get('/color', (req,res)=>{
    res.send(`
        <html>  
            <head>
                <link type="text/css" rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
                Hello color!
            </body>
        </html>
    `)
});

//Posting data  -- npm install --save body-parser
const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({extened:false})

app.get('/userinput', (req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/3queryString.html`)
    res.send(`${HTML}`)
})

app.post('/enteruser',urlencodeParser, (req,res)=>{ //enteruser = action in the html file
    const firstname = req.body.firstname;
    const lastname= req.body.lastname;

    console.log(firstname);
    console.log(lastname);
    res.send(200);
})

//Posting data --json 
const jsonParser = bodyParser.json();

app.get('/userinput_post', (req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/3jsonpost.html`)
    res.send(`${HTML}`)
})

app.post('/enteruser_post', jsonParser, (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

const port = process.env.PORT || 3000;
app.listen(port);