import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, movieSlice.reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const movieActions = movieSlice.actions;

export default store;

export const persistor = persistStore(store);
