// IMPORTS
var express = require("express")
var mongo = require("./bd.js")
var app = express()

// VARIABLES
const port = 8000
var db = mongo.connectBdd()

// UTILS
app.use(express.urlencoded({ extended: true })) 

// ALL ROUTE
app.get('/', function(req, res){
  res.send('Hello World')
})

app.get('/students', function (req, res) {
  res.send('dammmmm')
})

app.listen(port)