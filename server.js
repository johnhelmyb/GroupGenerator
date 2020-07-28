// IMPORTS
var express = require("express")
var app = express()
var fetch = require('node-fetch')
var bodyParser = require("body-parser");
var { config, obj } = require('./js/app.js')
var { GET_URL_STUDENT,
      POST_URL_STUDENT,
      GET_URL_GROUP, 
      POST_URL_GROUP
    } = require('./js/const.js')

 
// PORT SERVE
const PORT = 8080

// UTILS
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

//SET
app.set('view engine', 'ejs')

app.get('/student', async(req,res) => {
  try{
    const getStudent = await fetch(GET_URL_STUDENT)
    const parseStudent = await getStudent.json()
    res.render('pages/student', { data : parseStudent }) 
  }catch(err){
    console.log(err)
  }
});

app.get('/group', async(req,res) => {
  try{
    const getGroup = await fetch(GET_URL_GROUP)
    const parseGroup = await getGroup.json()
    res.render('pages/group', { data : parseGroup }) 
  }catch(err){
    console.log(err)
  }
})

app.post('/group', async(req,res) => {
  const data = Object.assign({}, obj(req.body.projet, req.body.number))
  try{
    const response = await fetch(POST_URL_GROUP, config("POST", data))
    res.redirect(req.originalUrl)
  }catch(err){
    console.log(err.toString())
  }
})

app.all("*", function (req, res) {
  return res.send('Page not found');
});

app.listen(PORT)