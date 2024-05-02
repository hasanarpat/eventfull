import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.contoller.js';

const userRoute = express.Router();

userRoute.get('/', getUsers);
userRoute.get('/:id', getUser);
userRoute.put('/:id', updateUser);
userRoute.delete('/:id', deleteUser);

export default userRoute;
