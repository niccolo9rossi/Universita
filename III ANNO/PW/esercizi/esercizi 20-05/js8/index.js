const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home',{messaggio: 'Hello from EJS'})
})

app.get('/prodotti', (req, res) => {
    const listaProdotti = [
        {id: 1, nome: 'prodotto 1'},
        {id: 2, nome: 'prodotto 2'},
        {id: 3, nome: 'prodotto 3'},
    ]
    res.render('prodotti', {listaProdotti: listaProdotti, messaggio:'oggi sconti'})
})

app.listen(9999, (err) => {
    console.log('Server is running on port 9999')
})

