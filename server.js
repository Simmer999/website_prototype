require('dotenv').config();
const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');

//===============================================================
    
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

//===============================================================

const router = require('./routes/index.js')
app.use(router)

//===============================================================

app.get('/', (req, res) => {
    res.render('home1')
});

//===============================================================

const port = process.env.PORT || 5555;

app.listen(port, err => {
    if (err) {
        return console.log(ERROR, err)
    }
    console.log(`Listening on ${port}`)
});