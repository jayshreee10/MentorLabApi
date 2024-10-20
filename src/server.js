import cors from "cors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth_routes.js";
import courseRouter from "./routes/course_routes.js";

mainServer(); //server start point

async function mainServer() {
  const app = express(); // Create an Express app
  const PORT = process.env.PORT || 3001; // Set the port

  // Middleware to parse the request body as JSON
  app.use(express.json());
  // Middleware to enable CORS
  app.use(cors());

  // Register the routers for the app
  app.use(courseRouter.path, courseRouter);
  app.use(authRouter.path, authRouter);

  // Connect to MongoDB
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Error occurred while connecting to MongoDB", error);
    });

  // Start the server
  app.listen(PORT, (error) => {
    if (!error)
      console.log(
        "Server is Successfully Running, and App is listening on port " + PORT
      );
    else console.log("Error occurred, server can't start", error);
  });
}
