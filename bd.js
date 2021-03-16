var MongoClient = require('mongodb').MongoClient

// VARIABLES
var db;
var MONGO_DBNAME = "student"
var MONGO_URL = "mongodb://localhost:27017"

connectBdd = async() => {
  try{
    if(!db) db = await MongoClient.connect(MONGO_URL, { useUnifiedTopology: true })
    return db.db(MONGO_DBNAME)
  }catch(err){
    console.error(" ERROR => ", err)
  }
}

exports.connectBdd = connectBdd