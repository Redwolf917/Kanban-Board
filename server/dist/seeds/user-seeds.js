import { User } from '../models/user.js';
import mongoose from '../db.js';
const seedUsers = async () => {
    try {
        await User.deleteMany({});
        const users = [
            { username: 'admin', password: 'password123' },
            { username: 'developer', password: 'devpass' },
        ];
        for (const user of users) {
            const newUser = new User(user);
            await newUser.save();
        }
        console.log('Users seeded successfully');
        mongoose.connection.close();
    }
    catch (error) {
        console.error('Error seeding users:', error);
    }
};
seedUsers();
