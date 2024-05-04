import express from 'express';
import {
  addArtist,
  deleteArtist,
  getArtist,
  getArtists,
  updateArtist,
} from '../controllers/artist.contoller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const artistRoute = express.Router();

artistRoute.get('/', getArtists);
artistRoute.get('/:id', getArtist);
artistRoute.post('/', verifyToken, addArtist);
artistRoute.put('/:id', verifyToken, updateArtist);
artistRoute.delete('/:id', verifyToken, deleteArtist);

export default artistRoute;
