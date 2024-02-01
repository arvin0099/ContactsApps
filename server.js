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

app.get('/contacts', (req, res) => {
    res.render('index.ejs', {
        contact: contact
    })
})

app.get('/contacts/new', (req, res) => {
    res.render('new.ejs')
})

app.post('/contacts', (req, res) => {
    contact.push(req.body)
    res.redirect('/contacts')
})

app.get('contacts/:id/edit', (req, res)=> {
	res.render('edit.ejs', {
		contact: contacts[req.params.id],
		index: req.params.id
	})
	
})

app.delete ('/:id/edit', (req, res)=> {
	contacts.splice(req.params.id, 1);
	
	res.redirect('/contacts');

})

app.get ('/show/:index', (req, res)=> {
    const index = req.params.id; // id is the array number in Contacts
    res.render('show.ejs', {contact: contacts[index]}) // displays ‘show.ejs’
})




app.listen(port, () => {
    console.log('server online')
})