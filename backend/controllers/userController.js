import { DB_NAME, USERS_COLL } from "../constants/dbConstants.js";
import { client } from '../utility/dbUtils.js';
import {compareSync, hashSync} from "bcrypt";
import jwt from 'jsonwebtoken';

// import bcrypt from 'bcryptjs';
// import { DB_NAME, USERS_COLL } from "../constants/dbConstants.js";
// import client from "../utility/dbUtils.js";

export const registerUser = async (req, resp) => {
    console.log("registerUser");
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);

    const {
        FirstName,
        LastName,
        DateOfBirth,
        InGameName,
        Country,
        State,
        City,
        MobileNumber,
        Username,
        Password,
        ConfirmPassword
    } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await collection.findOne({ Username });
        if (existingUser) {
            return resp.status(400).send({ message: "Username already exists" });
        }

        // Validate passwords
        if (Password !== ConfirmPassword) {
            return resp.status(400).send({ message: "Passwords do not match" });
        }

        // Hash the password
        const hashedPassword = hashSync(Password, 10);

        // Create the user object
        const userObj = {
            FirstName,
            LastName,
            DateOfBirth,
            InGameName,
            Country,
            State,
            City,
            MobileNumber,
            Username,
            Password: hashedPassword,
            registeredEvents: [] // Initialize with an empty array
        };

        // Insert the user into the database
        await collection.insertOne(userObj);

        // Respond to the client
        resp.status(201).send({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        resp.status(500).send({ message: "Internal server error" });
    }
};



export const loginUser= async (req,resp)=>{
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);
    const {Username,Password}=req.body;
    const inpUname = Username;
    console.log(req.body)
    console.log(inpUname,Password)
    if(!inpUname || !Password ){
        return resp.status(400).send({message:"Invalid credentidals"});
    }
    try {
        const userExists = await collection.findOne({Username:inpUname})
        console.log("userExists-----------------",userExists)
        if(!userExists){
            return resp.status(400).send({message:"User not found"})
        }
        const savedPassword = userExists.Password;
        // console.log("userPassword",savedPassword)
  //      console.log(compareSync(Password,userPassword))
        // console.log("Password,userPassword", Password,userPassword);
        // console.log(userExists, savedPassword)
        if(compareSync(Password,savedPassword))
            {
            const token = jwt.sign({id:userExists._id},"cdac");
            resp.status(200).send({message:"Login Successful",token:token})
        }else{
            resp.status(400).send({message:"Invalid credentials"})
        }
                
    } catch (error) {
        console.log(error);
        // resp.status(400).send({message:"Something went wrong"})
    }
}



