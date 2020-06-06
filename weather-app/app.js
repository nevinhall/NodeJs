const request = require('postman-request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (location === undefined) {
    console.log('Please provide a location to search')
    console.log('location is: ', location)
} else {
    console.log('Valid location is: ', location)
    geoCode(location, (error, {latitude, longitude, location} ={} )=> {
        if (error) {
            return console.log('error', error)
        }
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return console.log('error', error)
            }
            console.log(location)
            console.log('data', forecastdata)
        })

    })


}







