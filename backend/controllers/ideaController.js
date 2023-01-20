const asyncHandler = require("express-async-handler");

const Idea = require("../models/ideaModel");

const getIdeas = asyncHandler(async (req, res) => {
  const ideas = await Idea.find();
  res.status(200).json(ideas);
});

const setIdea = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const idea = await Idea.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(idea);
});

const updateIdea = asyncHandler(async (req, res) => {
  const idea = await Idea.findById(req.params.id);

  if (!idea) {
    res.status(400);
    throw new Error("Idea not found!");
  }

  const updatedIdea = await Idea.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedIdea);
});

const deleteIdea = asyncHandler(async (req, res) => {
  const idea = await Idea.findById(req.params.id);

  if (!idea) {
    res.status(400);
    throw new Error("Idea not found!");
  }

  await idea.remove();

  res.status(200).json({
    id: req.params.id,
  });
});

module.exports = { getIdeas, setIdea, updateIdea, deleteIdea };
