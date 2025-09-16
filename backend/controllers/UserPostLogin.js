import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/userSchema/User.js";
import Admin from "../model/AdminSchema/Admin.js"; // ✅ Admin import

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Pehle User collection check karo
    let user = await User.findOne({ email });
    let isAdmin = false;

    // 2️⃣ Agar user nahi mila to Admin collection check karo
    if (!user) {
      user = await Admin.findOne({ email });
      isAdmin = !!user;
    }

    // 3️⃣ Agar dono mein nahi mila
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 4️⃣ Password compare karo
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 5️⃣ JWT generate karo
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

    // 6️⃣ Response send karo (role ke hisaab se fields change)
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        ...(isAdmin
          ? {} // ✅ Admin ke liye extra fields nahi bhejna
          : {
              address: user.address,
              city: user.city,
              state: user.state,
              number: user.number,
            }),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
