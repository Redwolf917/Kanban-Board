import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';
import { retrieveUsers } from '../api/userAPI';

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData>({
    id: 0,
    name: '',
    description: '',
    status: 'Todo',
    assignedUserId: undefined, // Corrected to undefined instead of null
    assignedUser: null,
  });

  const [users, setUsers] = useState<UserData[]>([]);
  const navigate = useNavigate();

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await retrieveUsers();
        setUsers(data);

        // Set the first user as the default
        if (data.length > 0) {
          setNewTicket((prev) => ({
            ...prev,
            assignedUserId: data[0].id, // Default to the first user
          }));
        }
      } catch (err) {
        console.error('Failed to retrieve user info', err);
      }
    };

    fetchUsers();
  }, []);

  // Handle input changes for form fields
  const handleInputChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!newTicket.assignedUserId) {
      console.error('Assigned User ID is missing');
      alert('Please select a user to assign the ticket to.');
      return;
    }

    const ticketToSubmit = {
      ...newTicket,
      assignedUserId: parseInt(newTicket.assignedUserId?.toString() || '0', 10), // Ensure it’s a valid number
    };

    try {
      const data = await createTicket(ticketToSubmit);
      console.log('Ticket created successfully:', data);
      navigate('/');
    } catch (err) {
      console.error('Failed to create ticket:', err);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create Ticket</h1>

        <label htmlFor="tName">Ticket Name</label>
        <textarea
          id="tName"
          name="name"
          value={newTicket.name || ''}
          onChange={handleInputChange}
        />

        <label htmlFor="tStatus">Ticket Status</label>
        <select
          name="status"
          id="tStatus"
          value={newTicket.status || ''}
          onChange={handleInputChange}
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <label htmlFor="tDescription">Ticket Description</label>
        <textarea
          id="tDescription"
          name="description"
          value={newTicket.description || ''}
          onChange={handleInputChange}
        />

        <label htmlFor="tUserId">Assigned User</label>
        <select
          name="assignedUserId"
          id="tUserId"
          value={newTicket.assignedUserId?.toString() || ''}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select a user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id?.toString()}>
              {user.username}
            </option>
          ))}
        </select>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTicket;
