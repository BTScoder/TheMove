const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other", "prefer not to say"],
    },
    profession: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    hasDiscipleship: {
      type: String,
      enum: ["yes", "no"],
    },
    isWorker: {
      type: String,
      enum: ["yes", "no"],
    },
    position: {
      type: String,
    },
    canCommit: {
      type: String,
      enum: ["yes", "no"],
    },
    reason: {
      type: String,
    },
    learnAboutUs: {
      type: String,
      enum: ["Instagram", "Facebook", "Twitter", "Friend", "Other"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Hash password before saving to database
userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bycrypt.compare(candidatePassword, this.password);
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
