const express = require('express')
const router = express.Router()
const fs = require('fs')

const wineList = JSON.parse(fs.readFileSync('data/products.json'))

router.get("/", (req,res)=>{
    res.json({
        status: "success",
        data: wineList
    })

})

router.get("/:id", (req,res)=>{
    const id = req.params.id
    const wine = wineList.find((el)=> el.id == id)

    if(!wine){
        return res.status(404).json({
            status: 'fail',
            message: 'ID '+id+' non trovato'
        })
    }else{

    }

    
    res.json({
        status: "success",
        data: wineList
    })

})


router.post("/", (req,res)=>{
    const data = req.body
    console.log(data)

    if(!data.nome || !data.cantina){
        return res.status(422).json({
            status: 'error',
            message: 'dati mancanti'
        })
    }
    
    const new_id = wineList[wineList.length-1].id +1

    data.id = new_id

    wineList.push(data)

    res.json({
        status: "success",
        data: data
    })
})
module.exports = router
