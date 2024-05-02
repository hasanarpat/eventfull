import express from 'express';
import {
  addEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
} from '../controllers/event.contoller.js';

const eventRoute = express.Router();

eventRoute.get('/', getEvents);
eventRoute.post('/', addEvent);
eventRoute.get('/:id', getEvent);
eventRoute.put('/:id', updateEvent);
eventRoute.delete('/:id', deleteEvent);

export default eventRoute;
