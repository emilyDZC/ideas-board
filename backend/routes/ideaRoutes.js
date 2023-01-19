const express = require("express");
const router = express.Router();
const { getIdeas, setIdea, updateIdea, deleteIdea } = require("../controllers/ideaController");

router.route("/").get(getIdeas).post(setIdea);

router.route("/:id").put(updateIdea).delete(deleteIdea);

module.exports = router;
