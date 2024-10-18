import "dotenv/config";
import express from "express";
import authRouter from "./routes/auth_routes.js";
import courseRouter from "./routes/course_routes.js";

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3001;

  app.use(express.json());

  app.use(courseRouter.path, courseRouter);
  app.use(authRouter.path, authRouter);

  // mongoose
  //   .connect(process.env.MONGO_URL)
  //   .then(() => {
  //     console.log("Connected to MongoDB");
  //   })
  //   .catch((error) => {
  //     console.log("Error occurred while connecting to MongoDB", error);
  //   });

  app.listen(PORT, (error) => {
    if (!error)
      console.log(
        "Server is Successfully Running, and App is listening on port " + PORT
      );
    else console.log("Error occurred, server can't start", error);
  });
}

main(); //server start point
