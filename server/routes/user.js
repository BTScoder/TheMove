const multer = require("multer");
const express = require("express");
const path = require("path");
const User = require("../models/Users");
const auth = require("../middleware/auth");

const router = express.Router();

// Multer configuration for file
// Where to store uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/profiles/");
  },
  filename: function (req, file, cb) {
    const uniqueName = `${req.user.id}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null.uniqueName);
  },
});

// What files to accept
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Puts a 5mb limit on file size
  fileFilter: function (req, file, cb) {
    // Only accept images
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

router.put(
  "/profile",
  auth,
  upload.single("profilePic"),
  async (req, res) => {},
);
