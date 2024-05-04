import express from 'express';
import {
  addEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
} from '../controllers/event.contoller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const eventRoute = express.Router();

eventRoute.get('/', getEvents);
eventRoute.get('/:id', getEvent);
eventRoute.post('/', addEvent);
eventRoute.put('/:id', verifyToken, updateEvent);
eventRoute.delete('/:id', verifyToken, deleteEvent);

export default eventRoute;
