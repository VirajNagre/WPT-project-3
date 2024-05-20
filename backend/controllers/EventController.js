import { DB_NAME, EVENT_COLL,USERS_COLL } from "../constants/dbConstants.js";
import client from "../utility/dbUtils.js";
import jwt from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode";
import { ObjectId } from "mongodb";
//Get
export const getAllEvents = async (req, res) => {
    try {
        const database = client.db(DB_NAME);
        const eventsCollection = database.collection(EVENT_COLL);
        const usersCollection = database.collection(USERS_COLL); // Corrected collection name

        const events = await eventsCollection.aggregate([
            {
                $lookup: {
                    from: USERS_COLL, // Corrected collection name
                    localField: "eventHost.id",
                    foreignField: "_id",
                    as: "eventHost"
                }
            },
            {
                $lookup: {
                    from: USERS_COLL, // Corrected collection name
                    localField: "participants",
                    foreignField: "_id",
                    as: "participants"
                }
            },
            {
                $project: {
                    eventName: 1,
                    gameName: 1,
                    location: 1,
                    numberOfSeats: 1,
                    dateOfEvent: 1,
                    timeOfEvent: 1,
                    eventHost: { $arrayElemAt: ["$eventHost", 0] },
                    participants: {
                        $map: {
                            input: "$participants",
                            as: "participant",
                            in: {
                                $arrayElemAt: [
                                    {
                                        $filter: {
                                            input: "$participants",
                                            cond: { $eq: ["$$participant", "$$this"] }
                                        }
                                    },
                                    0
                                ]
                            }
                        }
                    }
                }
            }
        ]).toArray();
        console.log(events);
        res.status(200).send(events);
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
};




export const getEventById= async (req,res)=>{
    try {

        console.log("getEventById function ");
        // console.log(req.params.id);
        const eventId = req.params.id;
        const database = client.db(DB_NAME);
        const collection = database.collection(EVENT_COLL);        
 
        console.log(eventId);
        if(!eventId){
            return res.status(401).send({message:"Invalid event ID"});
        }

        
        const eventInfo = await collection.find({_id:new ObjectId(eventId)}).toArray();
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
        let {
            eventName,
            gameName,
            location,
            numberOfSeats,
            dateOfEvent,
            timeOfEvent,} 
        = req.body

        numberOfSeats = parseInt(numberOfSeats);

        const eventObj = {
            eventName,
            gameName,
            location,
            numberOfSeats,
            dateOfEvent,
            timeOfEvent,
            eventHost:req.user,
            participants:[new ObjectId(req.user.id)],
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
        let abc = await eventColl.findOne({_id:new ObjectId(eventId)})
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" , abc.numberOfSeats);
        const eventUpdate = await eventColl.updateOne(
            {_id:new ObjectId(eventId)},
            {
                $addToSet:{participants:new ObjectId(user.id)},
                $inc: { numberOfSeats: -1 } 
            }
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
