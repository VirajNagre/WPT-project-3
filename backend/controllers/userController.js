import { DB_NAME, USERS_COLL } from "../constants/dbConstants.js";
import { client } from '../utility/dbUtils.js';
import {compareSync, hashSync} from "bcrypt";
import jwt from 'jsonwebtoken';

export const registerUser=async(req,resp)=>{
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);

    const {FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber,Username,Password,ConfirmPassword}=req.body;
    var encryptedPassword="";
    try{
    const userExist=await collection.findOne({Username:Username});
    console.log(userExist);
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
    try{
        await collection.insertOne({FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber,Username,encryptedPassword});
        // console.log({FirstName,LastName,DateOfBirth,InGameName,Country,State,City,MobileNumber});
        resp.send("Data received");
    }catch(error){
        console.log(error);
    }
} 

export const loginUser= async (req,resp)=>{
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);

    const {Username,Password}=req.body;
    
    if(!Username || !Password ){
        resp.status(400).send({message:"Invalid credentidals"});
    }

    try {
        const userExists = await collection.findOne({Username:Username})
        if(!userExists){
            resp.status(400).send({message:"User not found"})
        }
        const userPassword = userExists.encryptedPassword;
  //      console.log(compareSync(Password,userPassword))
        console.log("Password,userPassword", Password,userPassword);
       console.log(userExists, userPassword)
        if(compareSync(Password,userPassword))
            {
            const token = jwt.sign({id:userExists._id},"cdac");
            resp.status(200).send({message:"Login Successful",token:token})
            
        }else{
            resp.status(400).send({message:"Invalid credentials"})

        }
        
        
    } catch (error) {
        console.log(error);
        resp.status(400).send({message:"Something went wrong"})
    }
}

const resgiterForEvent = async (req,res) =>{
     
}


