import { UserData } from './UserData'; // Make sure this path is correct

export interface TicketData {
  id: number;
  name: string;
  description: string;
  status: string;
  assignedUserId?: number; // Use undefined for optional fields
  assignedUser: UserData | null; // Use UserData here
}
