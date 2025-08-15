# Student Management System - Backend

A simple **Educational ERP/CRM backend** built for **Quorium Consulting** as part of a development assignment.  
This backend provides REST API endpoints to manage student data, including listing students, adding new records, fetching details, and retrieving dashboard statistics.

---

## Features

- **List All Students** – Retrieve complete student information.
- **Add New Student** – Add a new student record to the system.
- **Get Student by ID** – Fetch details of a specific student.
- **Dashboard Statistics** – Get total, active, and inactive student counts.
- **Initial Data Fetch** – Data is preloaded from [dummyjson.com/users](https://dummyjson.com/users) and transformed into student format.
- **In-Memory Storage** – No database required, data resets on server restart.

---

## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for building APIs
- **Axios** – HTTP client for fetching initial data
- **dotenv** – Environment variable management
- **CORS Middleware** – Cross-Origin Resource Sharing

---

## Project Structure

```
student-management-backend/
    │
    ├── src/
    │ ├── config/
    │ │ └── initData.js # Fetch & load initial student data
    │ ├── controllers/
    │ │ └── studentController.js # Handles API request/response
    │ ├── routes/
    │ │ └── studentRoutes.js # API endpoint definitions
    │ ├── services/
    │ │ └── studentService.js # Business logic layer
    │ ├── data/
    │ │ └── students.js # In-memory data storage
    │ └── app.js # Express app configuration
    │
    ├── index.js # Server entry point
    ├── .env # Environment variables
    ├── package.json
    └── README.md
```

---

## Setup & Installation

### 1. Clone the repository

```bash
git clone  https://github.com/SrinuTirumanisetti/Nodejs-Simple-Student-Management-System.git
cd Simple-Student-Management-System
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a .env file in the root directory:

```bash
PORT=3000
```

### 4. Start the server

For production:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

Server will run at:

```bash
http://localhost:3000
```

---

## API Endpoints

### 1. Get all Students

GET `/api/students`

Returns an array of all students.

Example Response:

```bash
[
    {
        "id": 1,
        "name": "Emily Johnson",
        "email": "emily.johnson@x.dummyjson.com",
        "course": "BCA",
        "status": "Inactive"
    },
  {
        "id": 2,
        "name": "James Davis",
        "email": "james.davis@x.dummyjson.com",
        "course": "MBA",
        "status": "Active"
    },
]
```

## 2. Get Student by ID

GET `/api/students/:id`

Example:

` GET /api/students/1`

Example Response:

```bash
    {
        "id": 1,
        "name": "Emily Johnson",
        "email": "emily.johnson@x.dummyjson.com",
        "course": "BCA",
        "status": "Inactive"
    }
```

## 3. Add New Student

POST `/api/students`

Body (JSON):

```bash
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "course": "MBA",
  "status": "Active"
}
```

Example Response:

```bash
{
  "id": 1692012345678,
  "name": "Jane Smith",
  "email": "jane@example.com",
  "course": "MBA",
  "status": "Active"
}
```

## 4. Dashboard Statistics

GET `/api/dashboard/stats`

Example Response:

```bash
{
  "totalStudents": 30,
  "activeStudents": 15,
  "inactiveStudents": 15
}
```

---

## Testing using Postman & Screenshots

### 1. Get All Students

![Get Students](./assets/GET-students.png)

### 2. Get Student by ID

![Get Student](./assets/GET-student-id.png)

if id is invalid

![Get Student](./assests/GET-student-id-invalid.png)

### 3. Add a New Student

![Add Student](./assests/POST-student.png)

### 4. Dashboard Stats

![Dashboard Stats](./assests/GET-dashboard-stats.png)



---

## Implementation Summary

- **Architecture:** Follows MVC-like separation:

  - Routes → handle URL mapping

  - Controllers → handle request/response

  - Services → business logic

  - Config → initial data fetching

  - Data Layer → in-memory storage

- **Data Flow:**

  - On server start, initData.js fetches student data from dummyjson.com.

  - Data is transformed into student format and stored in memory.

  - API endpoints interact with the service layer to get or update data.

- **Limitations:**

  - No database; data is lost when server restarts.

  - Courses and statuses are randomly assigned during initialization.

---

