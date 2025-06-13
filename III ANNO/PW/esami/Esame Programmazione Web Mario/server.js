const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json()); //for parsing application/json

app.use(cors()); // Enable CORS for all routes

app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory

const Richiesta = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json")));

app.get("/api/Richiesta", (req, res) => {

// Inserire richiesta server, esempio:
 const variabile_json = { status: "success", data: Richiesta, };
    res.json(variabile_json);
});

app.get("/api/Richiesta/:id", (req, res) => {
    const id = req.params.id;
    const richiesta = Richiesta.find(r => r.id === id);
    if (!richiesta) {
        return res.status(404).json({ status: "error", message: "Richiesta non trovata" });
    }
    else{
        const variabile_json = { status: "success", data: richiesta };
        res.json(variabile_json);
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});