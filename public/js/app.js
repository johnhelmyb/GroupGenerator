// config to fetch 
function config(type, data){
  const config = {
    method: type,
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return config
}

// to obj data fetch 
function obj(nameProjet, number, array){
  const data = {
    name: nameProjet,
    number: number,
    student: [...new Set(array)]
  }
  return data
}

function studentRomdon(array, bodyNumber){
  let count = 0
  const arrayRomdon = []
  let randomStudent = {}
  do{
    count++
    randomStudent = array[Math.floor(Math.random() * array.length)]
    arrayRomdon.push(randomStudent.name)
  } while (count < bodyNumber)
  return arrayRomdon
}

function whileRandomStudent(array, number){
  let count = 0
  let arrayStudentRandom = []
  do{
    count++
    arrayStudentRandom = studentRomdon(array,number)
    break;
  } while (count < req.body.number)
  return arrayStudentRandom
}

exports.obj = obj
exports.config = config
exports.studentRomdon = studentRomdon
exports.whileRandomStudent = whileRandomStudent