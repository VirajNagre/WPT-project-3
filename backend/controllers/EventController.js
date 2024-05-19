import { DB_NAME, EVENT_COLL } from "../constants/dbConstants.js";
import client from "../utility/dbUtils.js";
import jwt from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode";
import { ObjectId } from "mongodb";
//Get
export const getAllEvents = async (req,res)=>{
    try {
        console.log("user")
        console.log(req.user);
        console.log("getAllEvents")
        const database = client.db(DB_NAME);
        const collection = database.collection(EVENT_COLL);        
        const data = await collection.find({}).toArray();
        
        console.log("data",data)

        // jwt.verify(token, "cdac",(err,decoded)=>{
        //     if(err){
        //         console.log("JWT err", err);
        //     }
        //     else{
        //         console.log("JWT decoded", decoded);
        //     }
        // });
        
        console.log("end",data);
        res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error);
    }
}


// create
export const createEvent = async (req,res)=>{

    try {
        console.log(req.user);
        const {
            eventName,
            gameName,
            location,
            numberOfSeats,
            dateOfEvent,
            timeOfEvent,} 
        = req.body
        
        // Get the event host from req.user
        const eventHost = req.user;


        // Create the event object
        const eventObj = {
            eventName,
            gameName,
            location,
            numberOfSeats,
            dateOfEvent,
            timeOfEvent,
            eventHost
        };
        // console.log(obj);
        const database = client.db("esports");
        const collection = database.collection("events");
        // const result = await collection.find().toArray()
        const result = await collection.insertOne(eventObj);
        console.log(result);

        res.status(200).send("new event created");

    } catch (error) {
        console.log('error - ',error);
    }
}


export const deleteEvent  = async (req,res)=>{
    const {id} = req.params;
    console.log("deelete function ",id);
    const database = client.db(DB_NAME);
    const collection = database.collection(EVENT_COLL);
    const oid = new ObjectId(id);
    console.log(oid)
    try {
        const resl = await collection.deleteOne({_id:oid});
        console.log("resl \n",resl);
        if(resl.deletedCount==1){
            res.status(200).send({message:"Event deleted successfully"});
        }
    } catch (error) {
        console.log(error)
    }
    res.send("delete Event")
}

export const updateEvent = async (req,res)=>{
    const {id} = req.params;
    console.log("update function ",id);
    const {
        eventName,
        gameName,
        location,
        numberOfSeats,
        dateOfEvent, 
        timeOfEvent,} 
    = req.body

    const updObj = {eventName,
    gameName,
    location,
    numberOfSeats,
    dateOfEvent,
    timeOfEvent} 

    const database = client.db(DB_NAME);
    const collection = database.collection(EVENT_COLL);
    const oid = new ObjectId(id);
    console.log("updObj------------------------\n",updObj);

    try {
        const resl = await collection.updateOne({_id:oid},{ $set:updObj});
        console.log(resl);
        res.status(200).send({message:"Event updated"});
    } catch (error) {
        console.log(error);        
    }
}
