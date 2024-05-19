import express from 'express';

import { getAllEvents,createEvent, deleteEvent, updateEvent,eventRegistration,getEventById } from '../controllers/EventController.js';
import { verifyToken} from '../middleware/VerifyToken.js'
import { adminAuth } from '../middleware/adminAuth.js'

const eventRouter  = express.Router();

eventRouter.get("/",getAllEvents)
eventRouter.post("/newEvent",verifyToken,createEvent)
eventRouter.post("/registerForEvent",verifyToken,eventRegistration)

eventRouter.get("/:id",getEventById)
eventRouter.patch("/:id",verifyToken,updateEvent)
eventRouter.delete("/:id",verifyToken,adminAuth,deleteEvent)

export default eventRouter;