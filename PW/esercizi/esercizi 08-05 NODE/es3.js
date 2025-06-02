const http = require("http")
const fs = require("fs")

const myLog = require("./log")

const bl = require("./betterLog")
//const {error: e, debug: d} = require("./betterLog")

const server = http.createServer((req, res )=>{
    console.log(req.url)
    fs.readFile(__dirname+req.url,(err,data)=>{
        if(err){
            bl.error("ERRORE "+err)
            res.writeHead(404);
            res.end("File Not Found")
        }else{
            res.end(data)
        }
    })
    //res.end("Ciao")
})

const PORT = 8080
server.listen(PORT, (err)=>{
    //myLog.log("Il server è in ascolto sulla porta "+PORT)
    //myLog("Il server è in ascolto sulla porta "+PORT)
    bl.debug("Il server è in ascolto sulla porta "+PORT)
})

