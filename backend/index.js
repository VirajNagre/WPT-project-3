import express from 'express';
import { client } from './utility/dbUtils.js';
import eventRouter from './routers/eventRouter.js';
import userRouter from './routers/userRouter.js';
// let conn;


const app = express();
app.use(express.json());
app.use("/user",userRouter)



app.get("/",async (req,res)=>{
    try {
        console.log("endpoint reached");
        // console.log(client)
        
        const dab = client.db("abcd");
        const collection = dab.collection("xyz");

        const doc = {name:"pqr",town:"mumbai"};
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


app.use('/event',eventRouter);

app.listen(5000,async()=>{
        // run().catch(console.dir);
        // conn.
        console.log("server running")
    }
);
