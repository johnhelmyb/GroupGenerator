var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("student");
  dbo.createCollection("students", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    
  });
  dbo.createCollection("Groups", function(err, res) {
    if (err) throw err;
    console.log("collection created!");
    
 });
});
