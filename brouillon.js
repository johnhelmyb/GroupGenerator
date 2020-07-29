app.get('/students', async (req,res) => {
  const mongo = await bdd
  var mycor = await mongo.collection('students').find().toArray();
  var array=[]
  for (let i=0; i<mycor.length; i++){
    array.push(mycor[i]);
  }
  res.json(array) 
});