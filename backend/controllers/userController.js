import { DB_NAME, USERS_COLL } from "../constants/dbConstants.js";
import { client } from '../utility/dbUtils.js';

export const registerUser=async(req,resp)=>{
    const {FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber}=req.body;
    // console.log(req.body);

    try{

        const database = client.db(DB_NAME);
        const collection = database.collection(USERS_COLL);
        await collection.insertOne({FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber});
        // console.log({FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber});
        resp.send("Data received");
    }catch(error){
        console.log(error);
    }
} 