import jwt from 'jsonwebtoken';
import client from '../utility/dbUtils.js';
import { DB_NAME, EVENT_COLL,USERS_COLL } from "../constants/dbConstants.js";
import { ObjectId } from 'mongodb';



export const verifyToken = async (req,res,next)=>{
    // console.log(req.headers)
    const header = req.get('Authorization');
    // const database = client.db(DB_NAME);
    // const collection = database.collection(USERS_COLL);

    try {
        console.log("header",header);
        if(!header){
            return res.status(401).send({message:"Auth headers not found"})
        }
        const token = header.split(" ")[1];
        if(!token){
            res.status(401).send({message:"Token not found"})
        }else{
            jwt.verify(token,"cdac",(err,payload)=>{
                if(err){
                    res.status(401).send({message:"Invalid token"})
                }else{
                    console.log("user information ",payload);
                    req.user = payload;
                    next();
                }
            })
            console.log("user --------------------")
            // let a = await collection.findOne({_id:new ObjectId(payload.id)});
        }
    } catch (error) {      
        console.log(error)  
        return res.status(401).send({message:"Something went wrong"})
    }
}
