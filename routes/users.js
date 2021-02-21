const express = require('express');
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;

//============================================

MongoClient.connect(process.env.DB, {
    useUnifiedTopology: true })
        .then(client => {
            const db = client.db('sample_mflix');
            console.log('Connected to users database.') 
            const mflix = db.collection('movies');
            const users = db.collection('users')
             
//===========================================

    router.get('/', (req, res) => {
        users.find().toArray()
            .then(results => {
                res.render('users', { entries: results })
            })
        .catch(error => console.error(error))
    });  





    






});

module.exports = router