Express.js + Prisma + SQLite Backend

This is a simple backend application built using Express.js, Prisma ORM, and SQLite. It provides REST Application Programming Interface (API) endpoints to manage tasks. The backend is written in TypeScript for enhanced type safety and code quality.

Features

Task Management: Create, read, update, and delete tasks.

Database: Uses SQLite as the database with Prisma as the Object Relational Mapping (ORM) tool.

TypeScript: Ensures robust and type-safe development.

RESTful API: Easy integration with any front-end application.

Prerequisites

Node.js (v14 or later)

npm or yarn

Installation

Clone the repository:

git clone https://github.com/hassanalirepos/Backend
cd Backend

Install dependencies:

npm install

Initialize Prisma and the SQLite database:

npx prisma migrate dev --name init

Running the Application

Start the development server:

npm run dev

The server will run at http://localhost:3000 by default.

API Endpoints

Base URL: http://localhost:3000

GET /tasks

Retrieve all tasks.

Response:

[
  {
    "id": 1,
    "title": "Sample Task",
    "color": "red",
    "completed": false,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]

POST /tasks

Create a new task.

Request Body:

{
  "title": "New Task",
  "color": "blue"
}

Response:

{
  "id": 2,
  "title": "New Task",
  "color": "blue",
  "completed": false,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}

PUT /tasks/:id

Update an existing task by ID.

Request Body:

{
  "title": "Updated Task",
  "color": "green",
  "completed": true
}

Response:

{
  "id": 1,
  "title": "Updated Task",
  "color": "green",
  "completed": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-02T00:00:00.000Z"
}

DELETE /tasks/:id

Delete a task by ID.

Response:

{
  "message": "Task deleted"
}

Project Structure

src/
├── index.ts        # Entry point of the application
├── prisma/         # Prisma schema and migrations
├── routes/         # API routes (optional for modularization)
├── controllers/    # Logic for handling requests (optional for modularization)

Scripts

npm run dev: Start the development server.

npm run build: Compile TypeScript to JavaScript.

npm start: Run the compiled JavaScript application.

Future Improvements

Add user authentication.

Implement unit tests.

Integrate with a front-end application.
