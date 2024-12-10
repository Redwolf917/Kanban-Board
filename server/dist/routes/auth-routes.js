import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(`Attempting login for username: ${username}`); // Log username
        const user = await User.findOne({ username });
        if (!user) {
            console.log('User not found'); // Log user not found
            res.status(401).json({ message: 'Authentication failed' });
            return;
        }
        const passwordIsValid = await bcrypt.compare(password, user.password);
        console.log(`Password is valid: ${passwordIsValid}`); // Log password validation result
        if (!passwordIsValid) {
            res.status(401).json({ message: 'Authentication failed' });
            return;
        }
        const secretKey = process.env.JWT_SECRET_KEY || '';
        const token = jwt.sign({ username, id: user._id }, secretKey, { expiresIn: '1h' });
        console.log(`Token generated for user: ${username}`); // Log token generation
        res.json({ token });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export default router;
