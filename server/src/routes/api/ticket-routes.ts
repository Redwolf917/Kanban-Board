import { Router } from 'express';
import {
  getAllTickets,
  getTicketById,
  createTicket,
  deleteTicket,
  updateTicket,
} from '../../controllers/ticket-controller.js';

const ticketRouter = Router();

// Define ticket routes
ticketRouter.get('/', getAllTickets);          // Get all tickets
ticketRouter.get('/:id', getTicketById);       // Get a ticket by ID
ticketRouter.post('/', createTicket);          // Create a new ticket
ticketRouter.put('/:id', updateTicket);        // Update an existing ticket
ticketRouter.delete('/:id', deleteTicket);     // Delete a ticket

export { ticketRouter };
