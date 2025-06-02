const express = require('express');
const app = express();
const PORT = 8080

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/contatti', (req, res) => {
    console.log(req.params);
    res.set('Content-Type', 'text/plain')
    res.send('contatti')
})

app.post('/contatti', (req, res) => {
    
    res.status(201).send('contatti post')
})

/*app.get('/users/:id/aula/:aula', (req, res) => {
    console.log(req.params);

    res.send('USER')
})*/

const routerUser = express.Router();

// POST /users/login
routerUser.post('/login', (req, res) => {
    res.send('POST Login')
})
// GET /users/logout
routerUser.get('/logout', (req, res) => {
    res.send('GET Logout')
})
app.use('/users', routerUser);


app.listen(PORT, (err) => {
    console.log(`Server is running on port ${PORT}`);
})