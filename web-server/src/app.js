const express = require('express')
const app = express()

app.get('', (req,res) =>{
    res.send('Hello express')
})

app.get('/help',(req,res) =>{
    res.send('help page')
})

app.get('/about',(req,res) => {
    res.send('This the about page')
})

app.get('/weather',(req,res)=>{
    res.send('This is the weather page')
})

app.listen(3000, () => {
    console.log('Server is up')

})