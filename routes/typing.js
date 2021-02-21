const express = require('express');
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;

//====================================

MongoClient.connect(process.env.TYPING_DB, {
    useUnifiedTopology: true })
        .then(client => {
            const db = client.db('simmer999');
            console.log('Connected to the typing database.')
            const typing = db.collection('typing');

            
//=========================================

    router.get('/', (req, res) => {               
        typing.find().toArray()
            .then(results => {
                res.render('typing', {entries: results })
            })
        .catch(error => console.error(error))
    });

//==========================================

    router.post('/', (req, res) => {              
        typing.insertOne(req.body)
            .then(result => {
                res.redirect('/typing')
            })
        .catch(error => console.error(error))
        console.log(req.body);
        console.log(db.collection)
    });
})

    module.exports = router