import { Ticket } from '../models/ticket.js';
import mongoose from '../db.js';
const seedTickets = async () => {
    try {
        await Ticket.deleteMany({});
        const tickets = [
            { name: 'Bug Fix', status: 'Open', description: 'Fix login issue', assignedUserId: null },
            { name: 'Feature Request', status: 'In Progress', description: 'Add dark mode', assignedUserId: null },
        ];
        await Ticket.insertMany(tickets);
        console.log('Tickets seeded successfully');
        mongoose.connection.close();
    }
    catch (error) {
        console.error('Error seeding tickets:', error);
    }
};
seedTickets();
