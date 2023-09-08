# Task Management API

This documentation provides an overview of the Task Management API https://tasks.yunusemre.dev/api/tasks. The API allows users to manage tasks by providing endpoints for creating, retrieving, updating, and deleting tasks.

## Endpoints

The API has the following endpoints:

| Method | Endpoint     | Description             | URL                                                          |
|--------|--------------|-------------------------|------------------------------------------------------------------|
| GET    | api/tasks    | Get all tasks           | https://tasks.yunusemre.dev/api/tasks                               |
| GET    | api/tasks/id | Get a specific task     | https://tasks.yunusemre.dev/api/tasks/9                             |
| POST   | api/tasks    | Create a new task       | https://tasks.yunusemre.dev/api/tasks                               |
| PUT    | api/tasks/id | Update an existing task | https://tasks.yunusemre.dev/api/tasks/9                             |
| DELETE | api/tasks/id | Delete an existing task | https://tasks.yunusemre.dev/api/tasks/9                             |

## Postman collection:
https://documenter.getpostman.com/view/19399613/2s9Y5ZvMbe

## Stack:

- **<ins>Node.js</ins>** as a runtime environment
- **<ins>TypeScript</ins>** for typesafe development
- **<ins>Express</ins>** as a web framework
- **<ins>PostgreSQL</ins>** for a relational database
- **<ins>Prisma</ins>** as an ORM
- **<ins>Joi</ins>** for input validation
- **<ins>Jest</ins>** and **<ins>Supertest</ins>** for unit testing
- **<ins>Heroku</ins>** for app deployment
- **<ins>Render</ins>** for database deployment
- **<ins>GitHub Actions</ins>** for CI/CD pipeline

## Installation:

1. Clone the repository
2. Install the dependencies with `npm install`
3. Create `.env` file with provided `DATABASE_URL`
4. Run the application with `npm run dev`

## Test:

Run `npm test` to run tests. **Jest** and **Supertest** have been used for unit testing. Tests cover invalid/empty inputs and successful queries.

## Pipeline:

The app does not proceed to the deployment phase until the CI/CD pipeline is successfully completed. See the GitHub workflow steps:
https://github.com/YuunsGit/task-manager/blob/main/.github/workflows/node.js.yml
