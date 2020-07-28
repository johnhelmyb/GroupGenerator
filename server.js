// IMPORTS
var express = require("express")
var app = express()
var fetch = require('node-fetch')
var bodyParser = require("body-parser");

// PORT SERVE AND URL 
const PORT = 8080
const URL_STUDENT = 'http://localhost:8000/students'
const URL_GROUP = 'http://localhost:8000/group'

// UTILS
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

//SET
app.set('view engine', 'ejs')

app.get('/student', async(req,res) => {
  try{
    const getStudent = await fetch(URL_STUDENT)
    const parseStudent = await getStudent.json()
    res.render('pages/student', { data : parseStudent }) 
  }catch(err){
    console.log(err)
  }
});

app.get('/group', async(req,res) => {
  try{
    const getGroup = await fetch(URL_GROUP)
    const parseGroup = await getGroup.json()
    res.render('pages/group', { data : parseGroup }) 
  }catch(err){
    console.log(err)
  }
})

app.post('/group', async(req,res) => {
  try{
    const data = {
      name: req.body.projet,
      number: req.body.number
    }
    const config = {
      method: "POST",
      mode: 'cors',
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    }
    fetch(URL_GROUP, config)
    res.redirect(req.originalUrl)
  }catch(err){
    console.log(err)
  }
})

app.all("*", function (req, res) {
  return res.send('Page not found');
});

app.listen(PORT)