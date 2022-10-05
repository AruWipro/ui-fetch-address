const countries = require('./../resources/inputCountriesData.json')

function getCountriesAsDropDown(){
    let response = []
    countries.map(country => {
      let request = {
          key: country.alpha3,
          text: country.country,
          value: country.latitude+','+country.longitude
      }  
      response = [...response, request]
      return response
    })

    return response
}


module.exports ={getCountriesAsDropDown}