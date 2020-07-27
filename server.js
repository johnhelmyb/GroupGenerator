// IMPORTS
var express = require("express")
var bd = require("./bd.js")
var app = express()

// MONGO
var bdd = bd.connectBdd()

// VARIABLES
const port = 8000

// UTILS
app.use(express.urlencoded({ extended: true })) 

// ALL ROUTE
app.get('/', function(req, res){
  res.send('Hello World')
})

app.get('/students', function (req, res) {
  res.send('dammmmm')
})

app.post('/students', async function (req,res) {
  const mongo = await bdd
  mongo.collection('students').insertOne(req.body)
  res.json('Sucess')
});

app.listen(port)