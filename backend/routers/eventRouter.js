import express from 'express';
import { getAllEvents } from '../controllers/EventController.js';

const eventRouter  = express.Router();

eventRouter.get("/",getAllEvents)


export default eventRouter;