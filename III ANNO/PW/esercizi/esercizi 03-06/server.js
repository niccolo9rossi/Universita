const express = require('express')
const app = express()

const products = require('./products')

app.use(express.json()) //parser json

app.use('/api/v1/products', products)

app.listen(3000, ()=>{
    console.log("Server in ascolto sulla porta 3000")
})

//voglio creare un server crud partendo da file products.json

