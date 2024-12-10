import { Router } from 'express';
import { getAllUsers, getUserById, createUser, deleteUser, updateUser, } from '../../controllers/user-controller.js';
const userRouter = Router();
// Define user routes
userRouter.get('/', getAllUsers); // Get all users
userRouter.get('/:id', getUserById); // Get a user by ID
userRouter.post('/', createUser); // Create a new user
userRouter.put('/:id', updateUser); // Update an existing user
userRouter.delete('/:id', deleteUser); // Delete a user
export { userRouter };
