import express from 'express';
import {
  getCommentsOfUser,
  getCommentsOfEvent,
  addComment,
  updateComment,
  deleteComment,
  // getAllComments,
} from '../controllers/comment.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const commentRoute = express.Router();

// get a single users all comments
commentRoute.get('/user/:id', getCommentsOfUser);
// get a single events all comments
commentRoute.get('/:id', getCommentsOfEvent);
commentRoute.post('/', verifyToken, addComment);
commentRoute.put('/:id', verifyToken, updateComment);
commentRoute.delete('/:id', verifyToken, deleteComment);
// get all comments -> for testing
// commentRoute.get('/', getAllComments);

export default commentRoute;
