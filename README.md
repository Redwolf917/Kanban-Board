# Kanban Board with JWT Authentication

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Description
This project is a full-stack Kanban board application enhanced with secure authentication using JSON Web Tokens (JWT). It allows users to log in securely, manage tasks, and ensures that user sessions are authenticated. Unauthorized users cannot access the board, and sessions are automatically invalidated after inactivity.

## User Story
```md
AS A member of an agile team  
I WANT a Kanban board with a secure login page  
SO THAT I can securely access and manage my work tasks  
```

## Acceptance Criteria
```md
GIVEN a Kanban board with a secure login page  
WHEN I load the login page  
THEN I am presented with form inputs for username and password  

WHEN I enter my valid username and password  
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page  

WHEN I enter an invalid username or password  
THEN I am presented with an error message indicating that the credentials are incorrect  

WHEN I successfully log in  
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests  

WHEN I log out  
THEN the JWT is removed from the client's local storage and I am redirected to the login page  

WHEN I try to access the Kanban board page without being authenticated  
THEN I am redirected to the login page  

WHEN I remain inactive for a defined period  
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action  
```

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render
- **Other Tools**: wait-on, concurrently

## Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:Redwolf917/Kanban-Board.git
   ```
2. Navigate to the project directory:
   ```bash
   cd kanban-board
   ```
3. Install dependencies for both the server and client:
   ```bash
   npm run install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following keys:
     ```
     JWT_SECRET=<your-secret-key>
     MONGO_URI=<your-mongo-connection-string>
     PORT=3001
     ```

## Usage
1. Start the application in development mode:
   ```bash
   npm run start:dev
   ```
   This runs both the backend and frontend servers concurrently.

2. Open the application in your browser:
   ```plaintext
   http://localhost:3000
   ```

## Features
- Secure login page with username and password inputs.
- Authentication using JSON Web Tokens (JWT).
- Local storage for storing JWT securely for authenticated requests.
- Automatic session expiration after inactivity.
- Role-based redirection to the login page for unauthenticated users.
- Fully functional Kanban board for task management.

## Deployment
This project is deployed on [Render](https://render.com). To deploy:
1. Push your code to a repository like GitHub.
2. Create a new Web Service on Render for the backend.
3. Deploy the React client using the Render static site service.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Submit a pull request.

## License
This project is licensed under the MIT License.
