const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter a note"],
    },
    idea: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Idea",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
