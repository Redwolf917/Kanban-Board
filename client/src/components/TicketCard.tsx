import { FC } from 'react';

interface TicketCardProps {
  ticket: {
    id: number;
    name: string;
    status: string;
    description: string;
  };
  onDelete: (ticketId: number) => void; // Accept delete function as a prop
}

const TicketCard: FC<TicketCardProps> = ({ ticket, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(ticket.id); // Call the passed delete function with ticket ID
  };

  return (
    <div className="ticket-card">
      <h3>{ticket.name}</h3>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <button onClick={handleDeleteClick}>Delete</button> {/* Delete button */}
    </div>
  );
};

export default TicketCard;
