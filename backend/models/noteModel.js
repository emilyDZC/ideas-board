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
    userName: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
    noteType: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
