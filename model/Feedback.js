const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Feedback title cannot be empty."],
  },
  content: {
    type: String,
    trim: true,
    required: [true, "Feedback content cannot be empty."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
