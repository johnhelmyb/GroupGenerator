// IMPORTS
var express = require("express")
var app = express()
var fetch = require('node-fetch')
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var { config, obj } = require('./public/js/app.js')
var { GET_URL_STUDENT,
      POST_URL_STUDENT,
      GET_URL_GROUP, 
      POST_URL_GROUP,
      DELETE_URL_GROUP
    } = require('./public/js/const.js')

 
// PORT SERVE
const PORT = 8080

// UTILS
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//SET
app.set('views', './public');
app.set('view engine', 'ejs')

app.get('/student', async(req,res) => {
  try{
    const getStudent = await fetch(GET_URL_STUDENT)
    const parseStudent = await getStudent.json()
    res.render('views/pages/student', { data : parseStudent }) 
  }catch(err){
    console.log(err)
  }
});

app.get('/group', async(req,res) => {
  try{
    const getGroup = await fetch(GET_URL_GROUP)
    const parseGroup = await getGroup.json()
    res.render('views/pages/group', { data : parseGroup }) 
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

app.post('/group/delete', async(req,res) => {
  try{
    const response = await fetch(DELETE_URL_GROUP, config("DELETE", { name : req.body._method }))
    res.redirect('/group')
  }catch(err){
    console.log(err)
  }
})

app.all("*", function (req, res) {
  return res.send('Page not found');
});

app.listen(PORT)