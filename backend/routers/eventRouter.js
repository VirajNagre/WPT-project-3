import express from 'express';
import { getAllEvents,createEvent } from '../controllers/EventController.js';

const eventRouter  = express.Router();

eventRouter.get("/",getAllEvents)
eventRouter.post("/",createEvent)

export default eventRouter;