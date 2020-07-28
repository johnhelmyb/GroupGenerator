// IMPORTS
var express = require("express")
var app = express()
var fetch = require('node-fetch')
const PORT = 8080

app.set('view engine', 'ejs')

app.get('/student', async(req,res) => {
  const getStudent = await fetch('http://localhost:8000/students')
  const result = await getStudent.json()
  console.log(result)
  res.render('pages/student', { array : result }) 
});

app.listen(PORT)