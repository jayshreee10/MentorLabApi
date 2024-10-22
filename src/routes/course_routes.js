import express from "express";
import courseController from "../controllers/course_controllers.js";
import authMiddleware from "../middlewares/auth_middleware.js";

const courseRouter = express.Router();

courseRouter.path = "/api/courses";

// Protect the routes with the authMiddleware
courseRouter.get("/", authMiddleware, courseController.getAllCourses);
courseRouter.get("/?sort", authMiddleware, courseController.getCoursesByPrice);
courseRouter.get("/:id", authMiddleware, courseController.getCourse);
courseRouter.post("/", authMiddleware, courseController.postCourse);
courseRouter.put("/:id", authMiddleware, courseController.putCourse);
courseRouter.delete("/:id", authMiddleware, courseController.deleteCourse);

export default courseRouter;
