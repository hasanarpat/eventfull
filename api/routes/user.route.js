import express from 'express';
import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/user.contoller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const userRoute = express.Router();

userRoute.get('/', getUsers);
userRoute.get('/:id', getUser);
userRoute.put('/:id', verifyToken, updateUser);
userRoute.delete('/:id', verifyToken, deleteUser);

export default userRoute;
