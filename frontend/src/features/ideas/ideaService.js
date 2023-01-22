import axios from "axios";

const API_URL = "/api/ideas";

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

// Update idea

// Delete idea

const ideaService = {
  createIdea,
  getIdeas,
};

export default ideaService;
