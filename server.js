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

 app.get('/students', async function(req,res) {
  const mongo = await bdd
  var mycor = await mongo.collection('students').find().toArray();
  var array=[]
   
  for (let i=0; i<mycor.length; i++){
    array.push(mycor[i]);
  }
  console.log('after loop', array)

  res.send() 
});

app.post('/students', async function (req,res) {
  const mongo = await bdd
  mongo.collection('students').insertOne(req.body)

  
  res.json('Sucess')
});
app.delete('/students/:name', async function(req,res){
 const mongo = await bdd
 mongo.collection('students').deleteOne(req.params)
 res.send()
})
app.get('/group', async function(req,res){
  const mongo = await bdd
  var cool= await mongo.collection('/group').find().toArray()
  var array=[]

   for (let i=0; i<cool.length; i++){
    array.push(cool[i]);
   }
  res.send()
});
app.post('/group', async function(req,res){
  const mongo = await bdd
 
  mongo.collection('group').insertOne(req.body)
  console.log(req.body)
  res.send()
});
app.delete('/group/:name', async function(req,res){
  const mongo = await bdd
  mongo.collection('group').deleteOne(req.params)

  res.send()
});

app.listen(port)