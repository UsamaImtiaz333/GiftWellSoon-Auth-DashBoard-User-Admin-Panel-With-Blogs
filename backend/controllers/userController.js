import User from "../model/userSchema/User.js";

export const getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const users = await User.find({ role: "user" }, "-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
