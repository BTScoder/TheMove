const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("../config/db");
const User = require("../models/Users");

const makeAdmin = async () => {
  //   connectDB();
  await mongoose.connect(process.env.MONGO_URI);

  try {
    const result = await User.updateOne(
      {
        email: "jennie@email.com",
      },
      {
        role: "admin",
      },
    );
    console.log("Admin made successfully", result);
    process.exit();
  } catch (err) {
    console.error("Error making admin:", err);
  }
};

makeAdmin();
