import React from 'react';
import { TicketData } from '../interfaces/TicketData';
import TicketCard from './TicketCard';
import { ApiMessage } from '../interfaces/ApiMessage';

// Define the props interface
interface SwimlaneProps {
  title: string; // Title for the status (e.g., 'Todo', 'In Progress', 'Done')
  tickets: TicketData[]; // List of tickets for the swimlane
  deleteTicket: (ticketId: number) => Promise<ApiMessage>; // Function to delete a ticket
}

const Swimlane: React.FC<SwimlaneProps> = ({ title, tickets, deleteTicket }) => {
  return (
    <div className="swimlane">
      <h2>{title}</h2> {/* Display the title for the status */}
      {/* Render tickets in this swimlane */}
      {tickets.map((ticket, index) => (
        <TicketCard
          key={ticket.id ?? `ticket-${index}`} // Ensure the key is unique
          ticket={ticket}
          onDelete={deleteTicket} // Pass the delete function to TicketCard
        />
      ))}
    </div>
  );
};

export default Swimlane;
