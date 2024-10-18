import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import courseRouter from "./routes/course_routes.js";
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(courseRouter.path, courseRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
