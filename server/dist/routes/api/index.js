import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
const router = Router();
// Define API routes
router.use('/tickets', ticketRouter); // Routes for ticket operations
router.use('/users', userRouter); // Routes for user operations
export default router;
