// IMPORTS
var express = require("express")
var app = express()
var fetch = require('node-fetch')
const PORT = 8080

// USE
app.use(express.static(__dirname));

//SET
app.set('view engine', 'ejs')

app.get('/student', async(req,res) => {
  const getStudent = await fetch('http://localhost:8000/students')
  const result = await getStudent.json()
  console.log(result)
  res.render('pages/student', { array : result }) 
});

app.listen(PORT)