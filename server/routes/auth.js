const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const authToken = require("../middleware/auth");

// Login route
router.post("/login", async (req, res) => {
  //   res.send("Login user");
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res
      .status(200)
      .json({ message: "Login worked but where is the token?", token, user });
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.post("/register", async (req, res) => {
  console.log("request made", req.body);
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create(req.body);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/me", authToken, async (req, res) => {
  //   console.log("Authenticated user:", req.user);
  const user = await User.findById(req.user.id).select("-password");
  return res.status(200).json({ user });
});

module.exports = router;
