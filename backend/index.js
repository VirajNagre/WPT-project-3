import express from 'express';
import { client } from './utility/dbUtils.js';
import eventRouter from './routers/eventRouter.js';
import userRouter from './routers/userRouter.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


app.use("/user",userRouter)
app.use('/event',eventRouter);


app.listen(5000,async()=>{
        // run().catch(console.dir);
        // conn.
        try{
            client.connect();
            console.log("server running")
        }catch(e){
            console.log(e);
        }
    }
);
