const express = require("express");
const router = express.Router();
const { getIdeas, setIdea, updateIdea, deleteIdea } = require("../controllers/ideaController");
const { getIdeaNotes, createIdeaNote, updateIdeaNote, deleteIdeaNote } = require("../controllers/noteController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getIdeas).post(protect, setIdea);

router.route("/:id").put(protect, updateIdea).delete(protect, deleteIdea);

router.route("/:id/notes").get(protect, getIdeaNotes).post(protect, createIdeaNote);

router.route("/:id/notes/:noteId").put(protect, updateIdeaNote).delete(protect, deleteIdeaNote);

module.exports = router;
