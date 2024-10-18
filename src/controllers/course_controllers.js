const courseController = {
  getCourse: (req, res) => {
    res.send({
      message: "Hello World and it's getting from courses route",
      type: "GET",
    });
  },
  postCourse: (req, res) => {
    res.send({
      message: "Hello World and it's posting from courses route",
      type: "POST",
    });
  },

  putCourse: (req, res) => {
    res.send({
      message: "Hello World and it's putting from courses route",
      type: "PUT",
    });
  },

  deleteCourse: (req, res) => {
    res.send({
      message: "Hello World and it's deleting from courses route",
      type: "DELETE",
    });
  },
};

export default courseController;
