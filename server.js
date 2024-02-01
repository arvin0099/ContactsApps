const express = require('express')
const app = express()
const contact = require('./models/contacts.js')
const port = 3000
const methodOverride = require('method-override')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('TEST')
})






app.listen(port, () => {
    console.log('server online')
})