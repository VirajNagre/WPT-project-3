import express from 'express';

import { getAllEvents,createEvent, deleteEvent, updateEvent } from '../controllers/EventController.js';
import { verifyToken} from './middleware/VerifyToken.js'
import { adminAuth } from './middleware/adminAuth.js'

const eventRouter  = express.Router();

eventRouter.post("/",verifyToken,getAllEvents)
eventRouter.post("/newEvent",verifyToken,createEvent)
eventRouter.patch("/:id",verifyToken,updateEvent)
eventRouter.delete("/:id",verifyToken,adminAuth,deleteEvent)

export default eventRouter;