const data = require('./data.json')

data.flatMap(obj => obj.offices).flatMap((i) => {return i}).map(office => console.log(office))