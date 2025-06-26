const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json()); //for parsing application/json

app.use(cors()); // Enable CORS for all routes


app.get("/data", (req, res) => {

    const data = JSON.parse(fs.readFileSync("lista.json"))
    res.json({
        status: "success",
        msg: data
    })
});

app.use((req,res) =>{
    res.json({
        status : "error",
        msg : "API not implemeted"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});