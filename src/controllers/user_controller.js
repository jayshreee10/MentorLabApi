const userController = {
  signUp: (req, res) => {
    const { username, email, password, role, authType } = req.body;

    //field validations
    if (!username || !email || !password || !role || !authType) {
      let message = "";
      if (!username) {
        message += "Username is required, ";
      }
      if (!email) {
        message += "Email is required, ";
      }
      if (!password) {
        message += "Password is required, ";
      }
      if (!role) {
        message += "Role is required, ";
      }
      if (!authType) {
        message += "Auth type is required, ";
      }

      //remove the last ", " from the message
      message = message.slice(0, -2);

      res.status(400).send({ message });
      return;
    }

    //user name length should be greater than 3
    if (username.length < 3) {
      res.status(400).send({ message: "Username should be greater than 3" });
      return;
    }
    //validating email with regular expression
    const emailRegEx = /\S+@\S+\.\S+/;
    if (!emailRegEx.test(email)) {
      res.status(400).send({ message: "Invalid email" });
      return;
    }
    //password length should be greater than 6
    if (password.length < 6) {
      res.status(400).send({ message: "Password should be greater than 6" });
      return;
    }
    //role should be either student or teacher
    if (
      role.toLowerCase().trim() !== "student" &&
      role.toLowerCase().trim() !== "teacher"
    ) {
      res.status(400).send({ message: "Role should be student or teacher" });
      return;
    }
    //authType should be either email or google
    if (
      authType.toLowerCase().trim() !== "email" &&
      authType.toLowerCase().trim() !== "google"
    ) {
      res.status(400).send({ message: "Auth type should be email or google" });
      return;
    }

    //save to db

    res.send({
      message: "User signed up successfully",
      ...req.body,
    });
  },

  signIn: (req, res) => {
    res.send(req.body);
  },
};

export default userController;

/*

{
    "username":"narayan",
    "email":"laxminarayanreddy432@gmail.com",
    "password":"123456",
    "role":"student",
    "authType":"email"
}

*/
