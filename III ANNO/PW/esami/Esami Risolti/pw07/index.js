const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/list", (req, res) => {
  const dati = JSON.parse(fs.readFileSync("data/dati.json"));
  const arr = [];
  dati.forEach((element) => {
    arr.push(element.id);
  });

  res.json({
    status: "success",
    message: arr,
  });
});

app.get("/pics/:ID", (req, res) => {
  const dati = JSON.parse(fs.readFileSync("data/dati.json"));
  const idDaCercare = req.params.ID;
  const elemento = dati.find((item) => item.id === parseInt(idDaCercare));

  if (!elemento) {
    res.json({
      status: "failed",
      message: "id inesistente"
    });
  } else {
    res.json({
      status: "success",
      message: elemento,
    });
  }
});

app.use((req,res) => {
    res.json({
      status: "failed",
      message: "url inesistente",
    });
})

app.listen(PORT, () => {
  console.log("Server is running on port 3333");
});
