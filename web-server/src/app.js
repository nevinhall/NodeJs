const express = require('express')
const request = require('postman-request')
const path = require('path')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Set up handlebars view
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('',(req,res) =>{
    res.render('index',{
        title: 'Weather',
        name: 'created by nevin'

    })

})
app.get('/products',(req,res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })

    }
    console.log(req.query)
    res.send({
        products: []

    })

})
app.get('/about',(req,res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Nevin'
    })
})
app.get('/help',(req,res) => {
    res.render('help',{
        msg: 'This is the message b',
        name: 'nevin'
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error: 'No address given'})
    }

    location = req.query.address
    console.log('Valid location is: ', location)
    geoCode(location, (error, {latitude, longitude, location} = {} )=> {
        if (error) {
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastdata)  => {
            if (error) {
                return res.send({error})
            }

            res.send({
                forecast: forecastdata,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        msg: 'help article not found'
    })

})


app.get('*',(req,res) => {
    res.render('404',{
        msg: 'Page not found'
    })

})

app.listen(3000, () => {
    console.log('Server is up')

})

