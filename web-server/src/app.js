const express = require('express')
const path = require('path')
const hbs = require('hbs')

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
        title: 'Still index',
        name: 'created by nevin'

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
        name: 'created by nevin'
    })
})


app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'sunny',
        location: 'Cork',
        name: 'created by nevin'
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

