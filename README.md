# Employee Management System - MERN CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows you to manage employee data efficiently. This README file provides instructions on how to set up and use the application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Application Features](#application-features)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/en/)
- [MongoDB](https://www.mongodb.com/) installed and running

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/employee-management-mern.git
   ```

2. Change to the project directory:

   ```bash
   cd employee-management-mern
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Change to the `client` directory and install client dependencies:

   ```bash
   cd client
   npm install
   ```

5. Return to the project directory:

   ```bash
   cd ..
   ```

6. Create a `.env` file in the project root and configure it with your MongoDB connection string and a secret for JWT (JSON Web Tokens) like this:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

7. Start the server:

   ```bash
   npm run server
   ```

8. In a separate terminal, start the React app:

   ```bash
   npm run client
   ```

9. Access the application in your browser at `http://localhost:3000`.

## Folder Structure

- `server`: Contains the Express.js server and API routes.
- `client`: Contains the React front-end application.
- `models`: Defines Mongoose models for employee data.
- `routes`: Defines API routes for CRUD operations.
- `controllers`: Handles requests and responses.
- `config`: Contains configurations for MongoDB and JWT.
- `client/src`: React application source code.

## Application Features

- Create, read, update, and delete employee records.
- Search and filter employees by name, department, or position.
- Authentication and authorization with JWT.
- User registration and login.
- Protected routes for authenticated users.
- Responsive and user-friendly UI.

## Usage

1. Register or log in as a user to access the application.
2. Add employees with their details.
3. View a list of employees with search and filter options.
4. Update or delete employee records as needed.

## API Endpoints

- **POST /api/users/register:** Register a new user.
- **POST /api/users/login:** Authenticate and receive a JWT token.
- **GET /api/employees:** Get a list of all employees.
- **GET /api/employees/:id:** Get details of a specific employee by ID.
- **POST /api/employees:** Create a new employee record.
- **PUT /api/employees/:id:** Update an existing employee record.
- **DELETE /api/employees/:id:** Delete an employee record by ID.

For detailed usage and payload examples, refer to the API documentation or the source code in the `routes` directory.

