const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//get tasks
router.get('/get', async (req, res) => {
    const tasks = await loade_DB_collction()

    const data = await tasks.find({ complete: false }).toArray();

    if (data.length > 0) {
        res.json(data);
    } else {
        res.status(502).send()
    }
})
//add tasks
router.post('/add', async (req, res) => {
    const tasks = await loade_DB_collction()
    await tasks.insertOne({
        titel: req.body.titel,
        description: req.body.description,
        createdAt: new Date(),
        complete: false
    })

    res.status(201).send()
})

//delete tasks
router.delete('/delete/:id', async (req, res) => {
    const tasks = await loade_DB_collction()
    await tasks.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.status(200).send();
})


//connection to database
async function loade_DB_collction() {
    try {
        const uri = 'mongodb+srv://Eslam477:node12345@cluster0.oewi0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true })
        console.log('connection is done to database');
        const collection = client.db('sample_airbnb').collection('list_to_do')
        return collection;
    } catch (error) {
        throw error
    }
}


module.exports = router;