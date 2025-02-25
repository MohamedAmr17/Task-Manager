# Task Manager API
A RESTful API for managing tasks with user authentication.

## Features

- User authentication (signup/login)
- CRUD operations for tasks
- Task status management
- Filter tasks by statu

## API Endpoints

### Users
- POST /api/users/register - Register new user
- POST /api/users/login - Login user

### Tasks
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create new task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task

## Authentication

Include the JWT token in the Authorization header:

This implementation includes:

1. User authentication with JWT
2. CRUD operations for tasks
3. Data validation using Joi
4. Clean architecture with separate concerns
5. Error handling
6. MongoDB integration
7. API documentation

To use the API:

1. Register a user
2. Login to get JWT token
3. Use the token in subsequent requests to manage tasks
4. Tasks can be filtered by status using query parameters

The code follows best practices:
- Proper error handling
- Input validation
- Secure password storage
- Clean code structure
- Middleware for authentication
- Environment variable usage
- Documentation
