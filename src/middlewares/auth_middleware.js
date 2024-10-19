import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers["authorization"]?.split(" ")[1]; // Assuming format "Bearer <token>"

  // Check if token is provided
  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided, authorization denied" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }

    // Save the decoded user data to request for use in other routes
    req.user = decoded; // Store the user information in req.user
    next(); // Proceed to the next middleware/route handler
  });
};

export default authMiddleware;
