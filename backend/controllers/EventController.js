import { DB_NAME, EVENT_COLL,USERS_COLL } from "../constants/dbConstants.js";
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


export const getEventById= async (req,res)=>{
    try {

        console.log("getEventById function ");
        console.log(req.params.id);
        const eventId = req.params.id;
        const database = client.db(DB_NAME);
        const collection = database.collection(EVENT_COLL);        
 
        console.log(eventId);
        if(!eventId){
            return res.status(401).send({message:"Invalid event ID"});
        }

        
        const eventInfo = await collection.find({_id:new ObjectId('6649f3da82aa52f25c094bab')}).toArray();
        console.log("eventInfo",eventInfo);

        res.status(200).send({eventInfo});
    } catch (error) {
        console.log(error)
        res.status(400).send({message:"Something went wrong"});
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

        const eventObj = {
            eventName,
            gameName,
            location,
            numberOfSeats,
            dateOfEvent,
            timeOfEvent,
            eventHost:req.user,
            participants:[new ObjectId(eventHost.id)],
        };
        console.log(eventObj);
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
        timeOfEvent,
    } 
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


export const eventRegistration = async(req,res)=>{
    console.log("eventRegistration start")
    try {
        const database = client.db(DB_NAME)
        const userColl = database.collection(USERS_COLL);
        const eventColl = database.collection(EVENT_COLL);
        const {eventId} = req.body;
        const user = req.user;
        console.log(user.id )
        const eventUpdate = await eventColl.updateOne(
            {_id:new ObjectId(eventId)},
            {$addToSet:{participants:new ObjectId(user.id)}}
        )

        console.log("oasbdiausudb",await userColl.findOne({_id:new ObjectId(user.id)}));
        const userUpdate = await userColl.updateOne(
            {_id:new ObjectId(user.id)},
            {$addToSet:{registeredEvents:new ObjectId(eventId)}}
        )
        res.status(200).send("COOL COMPLETED")
    } catch (error) {
        console.log(error);
    }
}

const deRegisterFromEvent = async(req,res)=>{
    const {eventId} = req.body;
    const user = req.user;

    if(!eventId || !user){
        
    }
}
