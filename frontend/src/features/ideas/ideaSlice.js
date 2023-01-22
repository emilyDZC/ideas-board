import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ideaService from "./ideaService";

const initialState = {
  ideas: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create idea
export const createIdea = createAsyncThunk("ideas/create", async (ideaData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ideaService.createIdea(ideaData, token);
  } catch (error) {
    let message = "";
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message ? error.message : error.toString();
    }

    return thunkAPI.rejectWithValue(message);
  }
});

// Get ideas
export const getIdeas = createAsyncThunk("ideas/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ideaService.getIdeas(token);
  } catch (error) {
    let message = "";
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message ? error.message : error.toString();
    }

    return thunkAPI.rejectWithValue(message);
  }
});

// Delete idea
export const deleteIdea = createAsyncThunk("ideas/delete", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await ideaService.deleteIdea(id, token);
  } catch (error) {
    let message = "";
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message ? error.message : error.toString();
    }

    return thunkAPI.rejectWithValue(message);
  }
});

export const ideaSlice = createSlice({
  name: "idea",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createIdea.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createIdea.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ideas.push(action.payload);
      })
      .addCase(createIdea.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getIdeas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIdeas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ideas = action.payload;
      })
      .addCase(getIdeas.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteIdea.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteIdea.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ideas = state.ideas.filter((idea) => idea._id !== action.payload.id);
      })
      .addCase(deleteIdea.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = ideaSlice.actions;
export default ideaSlice.reducer;
