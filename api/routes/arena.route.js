import express from 'express';
import {
  addArena,
  deleteArena,
  getArena,
  getArenas,
  updateArena,
} from '../controllers/arena.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const arenaRoute = express.Router();

arenaRoute.get('/', getArenas);
arenaRoute.post('/', addArena);
arenaRoute.get('/:id', getArena);
arenaRoute.put('/:id', verifyToken, updateArena);
arenaRoute.delete('/:id', verifyToken, deleteArena);

export default arenaRoute;
