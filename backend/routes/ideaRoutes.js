const express = require("express");
const router = express.Router();
const { getIdeas, setIdea, updateIdea, deleteIdea } = require("../controllers/ideaController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getIdeas).post(protect, setIdea);

router.route("/:id").put(protect, updateIdea).delete(protect, deleteIdea);

module.exports = router;
