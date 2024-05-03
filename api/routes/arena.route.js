import express from 'express';
import {
  addArena,
  deleteArena,
  getArena,
  getArenas,
  updateArena,
} from '../controllers/arena.controller.js';

const arenaRoute = express.Router();

arenaRoute.get('/', getArenas);
arenaRoute.post('/', addArena);
arenaRoute.get('/:id', getArena);
arenaRoute.put('/:id', updateArena);
arenaRoute.delete('/:id', deleteArena);

export default arenaRoute;
