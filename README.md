# MentorLab Server 

The **MentorLab Server** provides the backend services for the MentorLab Learning Management System (LMS). It handles user authentication, course management, and API endpoints for both instructors and students.

## ⚙️ Tech Stack

The server is built using:

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: NoSQL database for storing user and course information.
- **JWT (JSON Web Tokens)**: Used for secure authentication.

## 📁 Folder Structure

Here is the directory structure of the MentorLab Server:

```sh
src
├── controllers
│   ├── course_controllers.js   # Handles course-related operations (create, update, delete)
│   └── user_controller.js      # Handles user-related operations (register, login, update)
├── middlewares
│   └── auth_middleware.js      # Middleware for JWT token authentication
├── models
│   ├── course_model.js         # Mongoose schema for course data
│   └── user_model.js           # Mongoose schema for user data
├── routes
│   ├── auth_routes.js          # Routes for user authentication (register, login)
│   └── course_routes.js        # Routes for course CRUD operations
└── server.js                   # Entry point for the Express server
```

## 🚀 Deployment

The APIs are deployed using **Render** at: [https://dashboard.render.com](https://dashboard.render.com).

To deploy the server on Render, follow these steps:

1. Push your code to GitHub.
2. Connect your Render account to your GitHub repository.
3. Create a new **Web Service** on Render and follow the setup instructions.
4. Add your environment variables in the Render dashboard for database connection and JWT secrets.

## 🧪 API Testing

For testing the API endpoints, a Postman collection is provided:

- **Postman Collection**: `MentorLab.postman_collection.json`

You can import this collection into Postman to easily test all the available APIs.

## 🔐 Authentication

The server uses **JWT** for authentication. Each protected route requires a valid token, which is generated upon user login. The `auth_middleware.js` ensures that only authenticated users can access certain routes.

## 📚 API Endpoints

### User Authentication

- `POST /auth/register`: Register a new user (instructor/student).
- `POST /auth/login`: Login to receive a JWT token.

### Course Management

- `POST /courses`: Create a new course (instructor only).
- `GET /courses`: Get all available courses.
- `PUT /courses/:id`: Update an existing course (instructor only).
- `DELETE /courses/:id`: Delete a course (instructor only).

## 🛠️ Installation and Setup

To run the server locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/jayshreee10/MentorLabApi.git
   cd MentorLabApi
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add the following variables:

   ```bash
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Start the Server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

## 📅 Roadmap

- [ ] Add more detailed logging for debugging.
- [ ] Implement course purchase and payment integration.
- [ ] Enhance security with rate limiting and input validation.

## 👤 Author

- **Jayshree Sadangi** - [@Jayshree10](https://github.com/jayshreee10)
