import { ObjectId } from "mongodb";
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
        Email,
        Country,
        State,
        City,
        MobileNumber,
        Username,
        Password,
        ConfirmPassword
    } = req.body;

    try {
        const existingUser = await collection.findOne({ Username });
        if (existingUser) {
            return resp.status(400).send({ message: "Username already exists" });
        }


        if (Password !== ConfirmPassword) {
            return resp.status(400).send({ message: "Passwords do not match" });
        }

        const hashedPassword = hashSync(Password, 10);

        const userObj = {
            FirstName,
            LastName,
            DateOfBirth,
            Email,
            Country,
            State,
            City,
            MobileNumber,
            Username,
            Password: hashedPassword,
            registeredEvents: []
        };

        await collection.insertOne(userObj);

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

        if(compareSync(Password,savedPassword))
            {
                const token = jwt.sign({id:userExists._id},"cdac");
                delete userExists.Password;
                // delete userExists.registeredEvents;
                resp.status(200).send({message:"Login Successful",token:token,userInfo:userExists})
        }else{
            resp.status(400).send({message:"Invalid credentials"})
        }
                
    } catch (error) {
        console.log(error);
        // resp.status(400).send({message:"Something went wrong"})
    }
}

export const updateUser = async (req, resp) => {
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);
    const {
        FirstName,
        LastName,
        DateOfBirth,
        Email,
        Country,
        State,
        City,
        MobileNumber,
        Username
    } = req.body;

    try {
        // Find the user by username
        const user = await collection.findOne({ Username });

        // Check if the user exists
        if (!user) {
            return resp.status(404).send({ message: "User not found" });
        }

        // Update user information
        await collection.updateOne(
            { Username },
            {
                $set: {
                    FirstName: FirstName || user.FirstName,
                    LastName: LastName || user.LastName,
                    DateOfBirth: DateOfBirth || user.DateOfBirth,
                    Email: Email || user.Email,
                    Country: Country || user.Country,
                    State: State || user.State,
                    City: City || user.City,
                    MobileNumber: MobileNumber || user.MobileNumber
                }
            }
        );

        resp.status(200).send({ message: "User information updated successfully" });
    } catch (error) {
        console.error("Error updating user information:", error);
        resp.status(500).send({ message: "Internal server error" });
    }
};


export const getUserDetails = async (req, resp) => {
    console.log("getUserDetails");
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);
    const id  = req.user.id; // Assuming the username is passed as a URL parameter
    console.log("req.user userDe",req.user.id);
    try {
        // Find the user by username
        const user = await collection.findOne({ _id:new ObjectId(id) });

        // Check if the user exists
        console.log("user found or not--------",user);
        delete user.Password
        delete user.registeredEvents
        if (!user) {
            return resp.status(404).send({ message: "User not found" });
        }
        
        console.log("user found sending data");
        return resp.status(200).send(user);
        
        // // Remove sensitive information before sending the response
        // const { Password, registeredEvents, ...userData } = user;

    } catch (error) {
        console.error("Error fetching user details:", error);
        resp.status(500).send({ message: "Internal server error" });
    }
};
