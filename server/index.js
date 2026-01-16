const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const authRoutes = require("./routes/auth");
const cors = require("cors");
const { connectDB } = require("./config/db");

// Connect to the database
connectDB();
// const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposedHeaders: ["Set-Cookie"],
  })
);
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get("/", (req, res) => {
  console.log("Hello World from Express!");
  res.send("Hello World from Express!");
});

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
