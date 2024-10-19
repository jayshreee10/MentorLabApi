import express from "express";
import courseController from "../controllers/course_controllers.js";
const courseRouter = express.Router();

courseRouter.path = "/api/courses";

courseRouter.get("/", courseController.getAllCourses);
courseRouter.get("/:id", courseController.getCourse);
courseRouter.post("/", courseController.postCourse);
courseRouter.put("/:id", courseController.putCourse);
courseRouter.delete("/:id", courseController.deleteCourse);

export default courseRouter;
