# MentorLab Server

MentorLab Server is the backend service for the **MentorLab** Learning Management System (LMS). It is built using **Node.js**, **Express.js**, and **MongoDB**, providing RESTful APIs for user authentication, course management, and content delivery.

## ⚡️ Features

- **User Authentication**: JWT-based authentication for secure login and signup.
- **Course Management**: APIs to create, update, and manage courses for instructors.
- **Middleware**: Authentication middleware to protect routes.
- **MongoDB Integration**: Mongoose models for efficient data handling of users and courses.

## 📁 Folder Structure

Here’s the folder structure of the `MentorLab Server` project:

```sh
src
├── controllers
│   ├── course_controllers.js   # Handles course-related operations (create, update, delete).
│   └── user_controller.js      # Manages user-related operations (login, signup).
├── middlewares
│   └── auth_middleware.js      # Middleware for protecting routes, ensuring users are authenticated.
├── models
│   ├── course_model.js         # Mongoose schema and model for courses.
│   └── user_model.js           # Mongoose schema and model for users.
├── routes
│   ├── auth_routes.js          # Routes for user authentication (login, signup).
│   └── course_routes.js        # Routes for managing course operations.
└── server.js                   # Entry point of the server, sets up the Express app and connects to MongoDB.
```

## ⚙️ Installation and Setup

To set up and run the **MentorLab Server**, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jayshreee10/MentorLabApi.git
   cd MentorLabApi
   ```

2. **Set up environment variables**:

   Create a `.env` file in the root of the project with the following details:

   ```
   MONGO_URI=<Your MongoDB Connection String>
   JWT_SECRET=<Your JWT Secret Key>
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the server**:

   Start the server in development mode:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3001` by default.

5. **Production build**:

   To run the server in production:

   ```bash
   npm start
   ```

## 📋 API Endpoints

Here are the available API routes for **MentorLab Server**:

### **Authentication Routes** (`/api/auth`)

- `POST /signup` - Register a new user.
- `POST /login` - Authenticate a user and generate a JWT token.

### **Course Routes** (`/api/courses`)

- `GET /` - Get a list of all courses.
- `POST /create` - Create a new course (Instructor only).
- `PUT /:courseId` - Update course details (Instructor only).
- `DELETE /:courseId` - Delete a course (Instructor only).

## 🌱 Third-Party Libraries

- **[Express.js](https://expressjs.com/)**: Web framework for building APIs.
- **[Mongoose](https://mongoosejs.com/)**: ODM for MongoDB to handle data models.
- **[JWT](https://jwt.io/)**: JSON Web Token for authentication.
- **[dotenv](https://github.com/motdotla/dotenv)**: Loads environment variables from `.env`.

## 🚀 Roadmap

Future improvements and features:

- [] Role-based access control for advanced permissions.
- [] Enhanced course search functionality.
- [] Analytics for instructors (course performance, student engagement).
- [] Integration with third-party services (payments, notifications).

## 👨‍💻 Author

- **Jayshree Sadangi** - [@Jayshree10](https://github.com/jayshreee10)

## ⭐️ Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your branch and create a pull request.
