import { Request, Response } from 'express';
import { Ticket } from '../models/ticket.js';

// Get all tickets
export const getAllTickets = async (_req: Request, res: Response): Promise<void> => {
  try {
    const tickets = await Ticket.find().populate('assignedUserId', 'username');
    res.json(tickets);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

// Get a ticket by ID
export const getTicketById = async (req: Request, res: Response): Promise<void> => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate('assignedUserId', 'username');
    if (!ticket) {
      res.status(404).json({ message: 'Ticket not found' });
      return;
    }
    res.json(ticket);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

// Create a ticket
export const createTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, status, description, assignedUserId } = req.body;

    // Validate required fields
    if (!name || !status || !description || !assignedUserId) {
      res.status(400).json({
        message: `Missing fields: ${
          !name ? 'name ' : ''
        }${!status ? 'status ' : ''}${!description ? 'description ' : ''}${!assignedUserId ? 'assignedUserId' : ''}`.trim(),
      });
      return;
    }
    

    const newTicket = await Ticket.create({
      name,
      status,
      description,
      assignedUserId,
    });

    res.status(201).json(newTicket);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};


// Update a ticket
export const updateTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedTicket) {
      res.status(404).json({ message: 'Ticket not found' });
      return;
    }

    res.json(updatedTicket);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

// Delete a ticket
export const deleteTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      res.status(404).json({ message: 'Ticket not found' });
      return;
    }
    res.json({ message: 'Ticket deleted' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};
