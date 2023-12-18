const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SignUp = require("../models/SignUpSchema");
const router = express.Router();



router.post("/signup", async (req, res) => {
    try {
      const { name, email, password, gender, phone, city, state } = req.body;
  
      // Check if user with the same email already exists
      const existingUser = await SignUp.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user in the database
      const newUser = new SignUp({
        name,
        email,
        phone,
        gender,
        password: hashedPassword,
        city,
        state
      });
      await newUser.save();
  
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Login route
  router.post("/signin", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await SignUp.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, "your-secret-key", {
        expiresIn: "1h", // Token expires in 1 hour
      });
  
      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;