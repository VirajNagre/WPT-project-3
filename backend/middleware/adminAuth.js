import { ObjectId } from "mongodb";
import client from "../utility/dbUtils.js"
import { DB_NAME } from "../constants/dbConstants.js";
import { USERS_COLL } from "../constants/dbConstants.js";

export const adminAuth = async (req,res,next) =>{
    const user = req.user
    const database = client.db(DB_NAME);
    const collection = database.collection(USERS_COLL);

    const isAdmin = await collection.findOne({_id:new ObjectId(user.id)})

    console.log(isAdmin)

    next()
}