const mongoose = require("mongoose");

const ideaSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    tags: {
      type: Array,
      required: false,
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Account",
    },
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Idea", ideaSchema);
