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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

ideaSchema.virtual("notes", {
  ref: "Note",
  localField: "_id",
  foreignField: "idea",
});

module.exports = mongoose.model("Idea", ideaSchema);
