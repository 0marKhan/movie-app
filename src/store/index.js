import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  backdrop_path: "",
  original_title: "",
  overview: "",
  poster_path: "",
  release_date: "",
  vote_average: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState: initialState,

  reducers: {
    setMovieDetails: (state, action) => {
      const movie = action.payload;
      state.backdrop_path = movie.backdrop_path;
      state.original_title = movie.original_title;
      state.overview = movie.overview;
      state.poster_path = movie.poster_path;
      state.release_date = movie.release_date;
      state.vote_average = movie.vote_average;
    },
  },
});

const store = configureStore({
  reducer: movieSlice.reducer,
});

export const movieActions = movieSlice.actions;

export default store;
