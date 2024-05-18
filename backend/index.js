import express from 'express';
import { client } from './utility/dbUtils.js';

// let conn;

const app = express();

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // If MongoDB connection fails, close the Express server
        console.log('Exiting...');
        process.exit(1);
    }
}


app.get("/",async (req,res)=>{
    try {
        console.log("endpoint reached");
        // console.log(client)
        const dab = client.db("Test");
        const collection = dab.collection("TestColl");
        const doc = {name:"red",town:"kanto"};
        const result = await collection.insertOne(doc);
        console.log(result.insertedCount);
        console.log(
            `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
          );
        const out = await collection.find().toArray();
        console.log(out);
        res.json({out});        
    } catch (error) {   
        console.log(error)
    }
})

app.get("/shantanu",(req,res) =>{
    res.send("shantanu")
    })
app.get("/jitendra",(req,res) =>{
    
    res.send("jitendra")

    })

app.listen(5000,async()=>{
        // run().catch(console.dir);
        // conn.
        console.log("server running")
    }
);
