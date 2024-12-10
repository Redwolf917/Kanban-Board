import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

// Define routes
router.use('/auth', authRoutes); // Authentication routes
router.use('/api', authenticateToken, apiRoutes); // API routes with authentication middleware

export default router;
