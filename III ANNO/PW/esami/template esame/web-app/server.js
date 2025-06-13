const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'dati.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }
        res.json(JSON.parse(data));
    });
});

app.post('/data', (req, res) => {
    const newData = req.body;
    fs.readFile(path.join(__dirname, 'data', 'dati.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data file');
        }
        const jsonData = JSON.parse(data);
        jsonData.push(newData);
        fs.writeFile(path.join(__dirname, 'data', 'dati.json'), JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing data file');
            }
            res.status(201).send('Data added successfully');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});