# Course Management Application

Welcome to the Course Management Application! This web application allows you to manage and track courses, including adding, editing, and deleting course information.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager, comes with Node.js)
- [Python](https://www.python.org/downloads/) (Python Language for the Backend)
## Installation

Clone the repository to your local machine:

   ```bash
   git clone https://github.com/alexuskarlj/CourseManagement.git
   ```
#### Backend

- Install Python 3.9 version above
```bash
https://www.python.org/downloads/
```

- Create environment variable and activate
```bash
python -m venv .venv
cd .venv/Scripts
activate
```

- Install requirements.txt
```bash
pip install -r requirements.txt
```

After doing those setups, you can now access the Backend of the App by running

```bash
python manage.py runserver
```

#### Frontend

- Navigate to the project directory:
```bash
cd Frontend
```
- Install project dependencies:
```bash
npm install
```

- Start the development server:
```bash
npm start
```

You can now access http://localhost:3000/


## Documentation

### Built With
**React** - A JavaScript library for building user interfaces

**Axios** - A promise-based HTTP client for making API requests

**React Router** - Declarative routing for React

### API Endpoints

**Get All Courses:**
```
Endpoint: /api/courses/
HTTP Method: GET
Description: Retrieves a list of all courses.
```
**Get Course by ID:**
```
Endpoint: /api/courses/:id/
HTTP Method: GET
Description: Retrieves a specific course by its unique identifier.
```
**Create New Course:**
```
Endpoint: /api/courses/
HTTP Method: POST
Description: Creates a new course with the provided data.
```

**Update Course by ID:**
```
Endpoint: /api/courses/:id/
HTTP Method: PUT
Description: Updates an existing course with the provided data based on its unique identifier.
```

**Delete Course by ID:**
```
Endpoint: /api/courses/:id/
HTTP Method: DELETE
Description: Deletes a specific course by its unique identifier.
```