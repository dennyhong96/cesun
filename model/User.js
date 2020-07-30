const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide an email."],
    unique: [true, "This email is already taken."],
    validate: {
      validator: (v) => validator.isEmail(v),
      message: "Please provide a valid email address.",
    },
  },
  amazonOrderId: {
    type: String,
    trim: true,
  },
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please provide a first name."],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Please provide a last name."],
  },
  address: {
    type: String,
    required: [true, "Please provide an address."],
  },
  phone: {
    type: String,
    validate: {
      validator: (v) => validator.isMobilePhone(v),
      message: "Please provide a valid phone number.",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minlength: [8, "A password must be at least 8 characters long"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      validator: function (v) {
        return v === this.password;
      },
      message: "Passwords do not match.",
    },
  },
  passwordResetToken: {
    type: String,
  },
  resetTokenExpires: {
    type: Date,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  level: {
    type: String,
    enum: ["PIONEER", "CESUNER"],
    default: "CESUNER",
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: ["USER"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
