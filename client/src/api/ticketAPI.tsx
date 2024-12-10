import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';
import Auth from '../utils/auth';

// Helper function to handle API responses
const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `HTTP Error: ${response.status}`);
  }
  return response.json();
};

// Retrieve all tickets
const retrieveTickets = async (): Promise<TicketData[]> => {
  const response = await fetch('/api/tickets/', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  });
  return handleApiResponse(response);
};

// Retrieve a single ticket by ID
const retrieveTicket = async (ticketId: number): Promise<TicketData> => {
  const response = await fetch(`/api/tickets/${ticketId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  });
  return handleApiResponse(response);
};

// Create a new ticket
const createTicket = async (body: TicketData): Promise<TicketData> => {
  const response = await fetch('/api/tickets/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Auth.getToken()}`,
    },
    body: JSON.stringify(body),
  });
  return handleApiResponse(response);
};

// Update an existing ticket
const updateTicket = async (ticketId: number, body: TicketData): Promise<TicketData> => {
  const response = await fetch(`/api/tickets/${ticketId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Auth.getToken()}`,
    },
    body: JSON.stringify(body),
  });
  return handleApiResponse(response);
};

// Delete a ticket by ID
const deleteTicket = async (ticketId: number): Promise<ApiMessage> => {
  const response = await fetch(`/api/tickets/${ticketId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Auth.getToken()}`,
    },
  });
  return handleApiResponse(response);
};

export { retrieveTickets, retrieveTicket, createTicket, updateTicket, deleteTicket };
