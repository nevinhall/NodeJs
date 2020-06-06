const request = require('postman-request')
const forecast = (latitude,longitude,callback) => {
   const url = 'http://api.weatherstack.com/current?access_key=f736ae78f35ad22a3cef6621f3effe9c&query=' + latitude + ',' + longitude
    request({url, json: true} ,(error, {body} = {}) => {
        if(error){
            callback('unable to connect to server', undefined)
        }else if(body.error){
            callback('unable to find locstion', undefined)
        }else{
            callback(undefined,'Its currently ' + body.current.temperature + ' , however it feels like '+ body.current.feelslike + ' the current description for the weather is' + body.current.weather_descriptions[0])
        }
    })

}



module.exports =  forecast