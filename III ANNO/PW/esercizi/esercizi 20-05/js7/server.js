const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));
const cors = require('cors');

app.use(cors());

app.use(express.static('public'));

const PORT = 9090;

const myMiddleware = (req, res, next) => {
    console.log('Middleware executed');
    next();
}

app.use(myMiddleware);

app.use(express.static('public'));

app.get("/data", (req, res) => {
    res.send("<h1>Hello from the server</h1>");
});

const checkAuth = function(req, res, next) {
    const authHeaders = req.headers['authorization'];
    console.log('Authorization header:', req.headers);

    if (authHeaders === 'Bearer passwordsegreta') {
        next();
    } else {
        res.status(401).send('Non autorizzato');
    }
}

const sendData = function(req, res, next) {
    res.json({"message": "tutto ok"});
}

app.get("/secure", [checkAuth, sendData])
app.listen(PORT, (err) => {

    if(err) {
        console.log('Error starting server:', err);
    }else{
        console.log(`Server is running on port ${PORT}`);
    }
});