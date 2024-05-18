import { DB_NAME, USERS_COLL } from "../constants/dbConstants.js";
import { client } from '../utility/dbUtils.js';
import {hashSync} from "bcrypt";

export const registerUser=async(req,resp)=>{
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);

    const {FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber,Username,Password,ConfirmPassword}=req.body;
    var encryptedPassword="";
    try{
    const userExist=await collection.findOne({MobileNumber:MobileNumber});
    if(userExist){
        // console.log("User already ")
        return resp.status(409).send({message:"user already exists"});
    }
    }catch(error){
        console.log(error);
        return resp.status(500).send({ message: "Error checking user existence" });
    }

    if(Password != ConfirmPassword){
       resp.status(400).send({message:"Please enter matching password"});
    }
    else{
         encryptedPassword=hashSync(Password,10);
    }
    
    
    // console.log(req.body);

    try{
        await collection.insertOne({FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber,Username,encryptedPassword});
        // console.log({FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber});
        resp.send("Data received");
    }catch(error){
        console.log(error);
    }
} 

export const loginUser=(req,resp)=>{
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);

    const {Username,Password}=req.body;
    

}