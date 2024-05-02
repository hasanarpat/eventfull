import express from 'express';
import {
  addArtist,
  deleteArtist,
  getArtist,
  getArtists,
  updateArtist,
} from '../controllers/artist.contoller.js';

const artistRoute = express.Router();

artistRoute.get('/artists', getArtists);
artistRoute.get('/:id', getArtist);
artistRoute.post('/:id', addArtist);
artistRoute.put('/:id', updateArtist);
artistRoute.delete('/:id', deleteArtist);

export default artistRoute;
