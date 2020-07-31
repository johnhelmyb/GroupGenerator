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
app.use(express.json());

// ALL ROUTE API 
app.get('/students', async (req,res) => {
  try{
    const mongo = await bdd
    const arrayStudent = await mongo.collection('students').find().toArray();
    const findStudent = arrayStudent.map(student => {
      return student
    })
    res.status(200).json(findStudent) 
  }catch(err){
    console.log(err)
  } 
});

app.post('/students', async (req,res) => {
  try{
    const mongo = await bdd
    const response = await mongo.collection('students').insertOne(req.body)
    res.status(200).json('Student Posted')
  }catch(err){
    console.log(err)
  }
});

app.delete('/students/:name', async (req,res) => {
  try{
    const mongo = await bdd
    const response = await mongo.collection('students').deleteOne(req.params)
    res.status(200).json("student deleted")
  }catch(err){
    console.log(err)
  }
})

app.get('/group', async (req,res) => {
  try{
    const mongo = await bdd
    const arrayGroup = await mongo.collection('group').find().toArray()
    const findGroup = arrayGroup.map(group => {
      return group
    })
    res.status(200).json(findGroup)
  }catch(err){
    console.log(err)
  }
});

app.get('/group/:name', async(req, res) => {
  try{
    const mongo = await bdd
    const response = await mongo.collection('group').find().toArray()
    const findGroup = response.map(group => {
      if(group.name == req.params.name){
        return group
      }
    })
    console.log(" FIND =>", findGroup)
    res.status(200).json(findGroup)
  }catch(err){
    console.log(err)
  }
})

app.post('/group', async (req,res) => {
  try{
    // CHANTIER... 😅
    let obj = {}
    const mongo = await bdd
    const findDocument = await mongo.collection('group').find().toArray()
      if(findDocument.length !== 0)
        for(let result of findDocument){
          obj.name = result.name === req.body.name ? result.name : false
        }
      if(obj.name){
        mongo.collection('group').updateOne(
          { 'name': req.body.name},
          { $push: { student : [req.body.student]}}
          )
          return res.status(200).json("New group posted")
      }
    mongo.collection('group').insertOne(req.body)
    res.status(200).json("New group posted")
  }catch(err){
    console.log(err)
  }
});

app.delete('/group/:name', async (req,res) => {
  try{
    const mongo = await bdd
    const response = await mongo.collection('group').deleteOne(req.body)
    res.status(200).json({ nameGroup: req.body, message: "Goup deleted" })
  }catch(err){
    console.log(err)
  }
});

app.listen(port)