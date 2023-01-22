const asyncHandler = require("express-async-handler");
const Idea = require("../models/ideaModel");
const Note = require("../models/noteModel");

// Get idea notes
const getIdeaNotes = asyncHandler(async (req, res) => {
  const idea = await Idea.findById(req.params.id).populate("notes");
  res.status(200).json(idea.notes);
});

// Create idea note
const createIdeaNote = asyncHandler(async (req, res) => {
  if (!req.body.text || !req.user || !req.params.id) {
    res.status(400);
    throw new Error("Please add the necessary fields");
  }

  const note = await Note.create({
    text: req.body.text,
    user: req.user.id,
    idea: req.params.id,
  });

  res.status(200).json(note);
});

// Update idea note
const updateIdeaNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found!");
  }

  // Will need to pass in user and idea in request body
  const updatedNote = await Note.findByIdAndUpdate(req.params, id, req.body, { new: true });
  res.status(200).json(updatedNote);
});

// Delete idea note
const deleteIdeaNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found!");
  }

  await note.remove();

  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = { getIdeaNotes, createIdeaNote, updateIdeaNote, deleteIdeaNote };
