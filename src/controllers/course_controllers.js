import Course from "../models/course_model.js";

const courseController = {
  // Get all courses
  getAllCourses: async (req, res) => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ message: "Error fetching courses", error });
    }
  },

  // Get a specific course by ID
  getCourse: async (req, res) => {
    try {
      const courseId = req.params.id;
      const course = await Course.findOne({ courseId });

      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ message: "Error fetching the course", error });
    }
  },

  // Add a new course
  postCourse: async (req, res) => {
    try {
      const {
        courseId,
        title,
        subtitle,
        description,
        category,
        banner,
        primaryLanguage,
        pricing,
        welcomeMessage,
        objectives,
        level,
        curriculum,
      } = req.body;

      // Check if the course already exists
      const existingCourse = await Course.findOne({ courseId });
      if (existingCourse) {
        return res
          .status(400)
          .json({ message: "Course with this ID already exists." });
      }

      // Create a new course
      const newCourse = new Course({
        courseId,
        title,
        subtitle,
        description,
        category,
        banner,
        primaryLanguage,
        pricing,
        welcomeMessage,
        objectives,
        level,
        curriculum,
      });
      await newCourse.save();

      res
        .status(201)
        .json({ message: "Course created successfully", course: newCourse });
    } catch (error) {
      res.status(500).json({ message: "Error creating course", error });
    }
  },

  // Update a course by ID
  putCourse: async (req, res) => {
    try {
      const courseId = req.params.id;
      const updatedCourse = await Course.findOneAndUpdate(
        { courseId },
        req.body,
        { new: true }
      );

      if (!updatedCourse) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.status(200).json({
        message: "Course successfully updated",
        course: updatedCourse,
      });
    } catch (error) {
      res.status(500).json({ message: "Error updating course", error });
    }
  },

  // Delete a course by ID
  deleteCourse: async (req, res) => {
    try {
      const courseId = req.params.id;
      const deletedCourse = await Course.findOneAndDelete({ courseId });

      if (!deletedCourse) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.status(200).json({
        message: "Course successfully deleted",
        course: deletedCourse,
      });
    } catch (error) {
      res.status(500).json({ message: "Error deleting course", error });
    }
  },
};

export default courseController;
