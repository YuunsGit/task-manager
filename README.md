# Task Management API Documentation

This documentation provides an overview of the Task Management API https://tasks.yuuns.tech. The API allows users to manage tasks by providing endpoints for creating, retrieving, updating, and deleting tasks.

## Endpoints

The API has the following endpoints:

| Method | Endpoint     | Description             | Example                                                          |
|--------|--------------|-------------------------|------------------------------------------------------------------|
| GET    | api/tasks    | Get all tasks           | https://tasks.yuuns.tech/api/tasks                               |
| GET    | api/tasks/id | Get a specific task     | https://tasks.yuuns.tech/api/tasks/9                             |
| POST   | api/tasks    | Create a new task       | https://tasks.yuuns.tech/api/tasks                               |
| PUT    | api/tasks/id | Update an existing task | https://tasks.yuuns.tech/api/tasks/9                             |
| DELETE | api/tasks/id | Delete an existing task | https://tasks.yuuns.tech/api/tasks/9                             |

## Postman collection:
https://documenter.getpostman.com/view/19399613/2s9Y5ZvMbe

## Stack:

- **Node.js** as a runtime environment
- **TypeScript** for typesafe development
- **Express** as a web framework
- **PostgreSQL** for a relational database
- **Prisma** as an ORM
- **Joi** for input validation
- **Jest** and **Supertest** for unit testing
- **Render** for deployment

## Installation:
1. Clone the repository
2. Install the dependencies with `npm install`
3. Create `.env` file with provided `DATABASE_URL`
4. Run the application with `npm run dev`

## Test:
Run `npm test` to run tests. **Jest** and **Supertest** have been used for unit testing. Tests cover invalid/empty inputs and successful queries.
