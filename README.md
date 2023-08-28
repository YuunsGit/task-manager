# Task Management API Documentation

This documentation provides an overview of the Task Management API https://tasks.yuuns.tech. The API allows users to
manage tasks by providing endpoints for creating, retrieving, updating, and deleting tasks.

## Endpoints

The API has the following endpoints:

| Method | Endpoint     | Description             |
|--------|--------------|-------------------------|
| GET    | api/tasks    | Get all tasks           |
| GET    | api/tasks/id | Get a specific task     |
| POST   | api/tasks    | Create a new task       |
| PUT    | api/tasks/id | Update an existing task |
| DELETE | api/tasks/id | Delete an existing task |

## Stack:

- **Node.js** as a runtime environment
- **TypeScript** for typesafe development
- **Express** as a web framework
- **PostgreSQL** for a relational database
- **Prisma** as an ORM
- **Joi** for input validation
- **Jest** and **Supertest** for unit testing

## Installation:
1. Clone the repository
2. Install the dependencies with `npm install`
3. Create `.env` file with provided `DATABASE_URL`
4. Run the application with `npm run dev`

## Test:
Run `npm test` to run tests.