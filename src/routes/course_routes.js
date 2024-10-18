import express from "express";
import courseController from "../controllers/course_controllers.js";
const courseRouter = express.Router();

courseRouter.path = "/api/course";

courseRouter.get("/", courseController.getCourse);
courseRouter.post("/", courseController.postCourse);
courseRouter.put("/", courseController.putCourse);
courseRouter.delete("/", courseController.deleteCourse);

export default courseRouter;
