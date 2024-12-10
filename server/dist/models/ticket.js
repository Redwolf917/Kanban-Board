import mongoose from 'mongoose';
const ticketSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    assignedUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
export const Ticket = mongoose.model('Ticket', ticketSchema);
