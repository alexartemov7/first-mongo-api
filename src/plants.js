import { db } from "./connectDb.js"  //importing connection to database from ConnectDb.js


export function getAllPlants(req, res) {
    db.collection('plants').find({}).toArray()  //writing out function to add plant
    .then(plants => {
        res.send(plants)
    })
    .catch(err => {
        res.status(500).send({success: false, message: err })
    })
}

export function addPlant(req, res) {
    const newPlant = req.body
    db.collection('plants').insertOne(newPlant)
        .then(() => {
            res.sendStatus(201).send({ message: "Plant added", success: true})
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err })
        })
}