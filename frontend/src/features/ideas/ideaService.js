import axios from "axios";

const API_URL = "/api/ideas/";

// Create idea
const createIdea = async (ideaData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, ideaData, config);

  return response.data;
};

// Get all ideas
const getIdeas = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get idea
const getIdea = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + id + "/notes", config);

  return response.data;
};

// Create idea note
const createIdeaNote = async (noteData, id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + id + "/notes", noteData, config);

  return response.data;
};

// Update idea

// Delete idea
const deleteIdea = async (ideaId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + ideaId, config);

  return response.data;
};

const deleteNote = async (noteId, ideaId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + ideaId + "/notes/" + noteId, config);

  return response.data;
};

const ideaService = {
  createIdea,
  getIdeas,
  deleteIdea,
  getIdea,
  createIdeaNote,
};

export default ideaService;
