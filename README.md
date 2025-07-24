# TicketFlow - Ticket Management System

![TicketFlow Screenshot](./screenshot.png) <!-- Add a screenshot later -->

A full-stack ticket management system built with the PERN stack (PostgreSQL, Express, React, Node.js), inspired by tools like Jira and Trello.

## Features

- **User Authentication**
  - Secure JWT-based registration/login
  - Protected routes
  - Cookie-based session management

- **Ticket Management**
  - Create tickets with title, description, status, and priority
  - Update ticket details
  - Drag-and-drop status changes (todo → inprogress → done)
  - Filter tickets by status and priority
  - Delete tickets

- **Dashboard**
  - Overview of all tickets
  - Visual indicators for ticket status and priority
  - Responsive design for all devices

## Technologies Used

### Frontend
- React 18
- React Router v6
- Tailwind CSS + DaisyUI
- Axios for API calls
- React Hook Form for forms
- React-icons

### Backend
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT authentication
- Bcrypt for password hashing
- CORS middleware

### Development Tools
- Docker (for PostgreSQL)
- Nodemon
- Postman/Insomnia for API testing

## Installation

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v15+)
- Docker (optional)

## Docker Setup  
### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

### Quick Start
1. Clone the repository (if not already done):
   ```bash
   git clone https://github.com/yourusername/ticketflow.git
   cd ticketflow

2. Start all services with Docker Compose:

```bash
docker-compose up --build

3. Access the services:

🖥️ Frontend: http://localhost:5173

⚙️ Backend API: http://localhost:5000

🐘 PGAdmin (Database GUI): http://localhost:5050

Email: admin@admin.com

Password: admin