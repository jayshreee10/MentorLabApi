import mongoose from "mongoose";

const Schema = mongoose.Schema;

const curriculumItemSchema = new Schema({
  title: { type: String, required: true },
  youtubeLink: { type: String, required: true },
  googleForm: { type: String, required: true },
  description: { type: String, required: true },
  fileData: {
    url: { type: String, required: true },
    type: { type: String, required: true },
  },
  id: { type: String, required: true },
});

const courseSchema = new Schema(
  {
    courseId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    banner: { type: String, required: true },
    primaryLanguage: { type: String, required: true },
    pricing: { type: String, required: true },
    welcomeMessage: { type: String, required: true },
    objectives: { type: String, required: true },
    level: { type: String, required: true },
    curriculum: [curriculumItemSchema],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
