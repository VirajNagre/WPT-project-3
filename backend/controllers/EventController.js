import client from "../utility/dbUtils.js";


//Get
export const getAllEvents = async (req,res)=>{
    try {
        console.log("getAllEvents");
    } catch (error) {
        
    }
}


// create
export const createEvent = async (req,res)=>{
    try {

        const obj = {
            eName : "gaming",
            by : "jitendra",
            location :"mumbai"
        }
        const database = client.db("esports");
        const collection = database.collection("events");
        const result = await collection.insertOne(obj)

        res.send("new event created");

    } catch (error) {
        console.log('error - ',error);
        
    }
}
