import bcrypt from "bcryptjs";
import User from "../model/userSchema/User.js";
import Admin from "../model/AdminSchema/Admin.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, role, address, city, state, number } = req.body;

    if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Role ke hisaab se check karo
    const Model = role === "admin" ? Admin : User;

    const existingUser = await Model.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Model.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      ...(role === "user" ? { address, city, state, number } : {}),
    });

    res.status(201).json({
      message: `${role} created successfully`,
      user: {
        id: newUser._id,
        fullName: `${newUser.firstName} ${newUser.lastName}`,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
