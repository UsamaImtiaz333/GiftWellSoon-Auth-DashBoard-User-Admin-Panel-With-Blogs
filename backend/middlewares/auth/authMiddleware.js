import jwt from "jsonwebtoken";

const JWT_SECRET = "your_jwt_secret_key";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // user ka data attach kar diya
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
