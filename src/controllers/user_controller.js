import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

const userController = {
  signUp: async (req, res) => {
    const { userName, email, password, role, authType } = req.body;

    // Field validations
    if (!userName || !email || !password || !role || !authType) {
      let message = "";
      if (!userName) message += "userName is required, ";
      if (!email) message += "Email is required, ";
      if (!password) message += "Password is required, ";
      if (!role) message += "Role is required, ";
      if (!authType) message += "Auth type is required, ";
      message = message.slice(0, -2);
      return res.status(400).send({ message });
    }

    // userName length should be greater than 3
    if (userName.length < 3) {
      return res
        .status(400)
        .send({ message: "userName should be greater than 3" });
    }

    // Validating email with regular expression
    const emailRegEx = /\S+@\S+\.\S+/;
    if (!emailRegEx.test(email)) {
      return res.status(400).send({ message: "Invalid email" });
    }

    // Password length should be greater than 6
    if (password.length < 6) {
      return res
        .status(400)
        .send({ message: "Password should be greater than 6" });
    }

    // Role should be either student or teacher
    if (!["student", "teacher"].includes(role.toLowerCase().trim())) {
      return res
        .status(400)
        .send({ message: "Role should be student or teacher" });
    }

    // AuthType should be either email or google
    if (!["email", "google"].includes(authType.toLowerCase().trim())) {
      return res
        .status(400)
        .send({ message: "Auth type should be email or google" });
    }

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .send({ message: "User already exists, Please sign in" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Save to DB
      const newUser = new User({
        userName,
        email,
        password: hashedPassword,
        role,
        authType,
      });

      await newUser.save();

      // Generate JWT token after successful signup
      const token = jwt.sign(
        { id: newUser._id, userName: newUser.userName, role: newUser.role },
        process.env.JWT_SECRET, // Ensure you have a secret key in your environment variables
        { expiresIn: "1y" } // Token expires in 1 year
      );

      res.status(200).send({
        message: "User signed up successfully",
        token, // Return the token
        userName: newUser.userName,
        email: newUser.email,
        role: newUser.role,
        authType: newUser.authType,
      });
    } catch (error) {
      res.status(500).send({ message: "Error signing up user", error });
    }
  },

  signIn: async (req, res) => {
    const { email, password } = req.body;

    // Field validation
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    }

    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .send({ message: "User does not exist, Please sign up" });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send({ message: "Password is incorrect" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user._id, userName: user.userName, role: user.role },
        process.env.JWT_SECRET, // Ensure you have a secret key in your environment variables
        { expiresIn: "1y" } // Token expires in 1 year
      );

      res.status(200).send({
        message: "User signed in successfully",
        token,
        userName: user.userName,
        email: user.email,
        role: user.role,
        authType: user.authType,
      });
    } catch (error) {
      res.status(500).send({ message: "Error signing in user", error });
    }
  },
};

export default userController;
