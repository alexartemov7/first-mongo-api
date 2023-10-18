import express from "express";
import cors from "cors"; // connecting cors 
import { getAllPlants, addPlant } from './src/plants.js' //pulling function to index - the main file
const PORT = 3005 //creating a variable containing the number of the port 3005

const app = express() //creating express app

app.use(express.json()) //telling express app that we are using json

app.use(cors()) //We are using cors. Cors is Cross Origin Resource Sharing. Example with Flash game boxing gloves hitting W. Bush. Sharing this game. Allowing to share this game with other websites.

app.get("/plants", getAllPlants) //creating a request running a function that get all the plants
app.post("/plants", addPlant) //creating a post request running a function that adds a plant
// app.delete("/plants/:plantId", deletePlant)





app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
}) 