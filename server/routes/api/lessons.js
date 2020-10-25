const mongodb = require("mongodb");
const express = require("express");

const router = express.Router();

//get lesons
router.get('/', async (req,res) => {
    const posts = await loadDataFromDB()
    res.send(await posts.find({}).toArray())
})
//add lessons
router.post('/', async (req,res) => {
    const posts = await loadDataFromDB()
    await posts.insertOne({
        text: req.body.text,
        style: req.body.style,
        createdAt: new Date()
    })
    res.status(201).send()
})


//delete lessons

router.delete('/:id', async (req,res) => {
    const posts = await loadDataFromDB()
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send()
})

async function loadDataFromDB() {
    const uri = "mongodb+srv://milosz:Dzikiryj45@lessons.3daez.mongodb.net/lessons?retryWrites=true&w=majority";
    const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    return client.db('lessons').collection('lessons')
}

module.exports = router
