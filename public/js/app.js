// config to fetch 
function config(type, data){
  const config = {
    method: type,
    mode: 'cors',
    headers:{
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return config
}

// to obj data fetch 
function obj(projet, number){
  const data = {
    name: projet,
    number: number
  }
  return data
}

exports.obj = obj
exports.config = config