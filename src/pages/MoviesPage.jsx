import React, { useEffect, useState } from "react";
import { TextField, createTheme, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import requests from "../Requests";
import axios from "axios";
import { useDispatch } from "react-redux";
import { movieActions } from "../store";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(requests.requestMovieList);
      const response2 = await axios.get(requests.requestNowPlaying);
      const response3 = await axios.get(requests.requestPopular);
      const response4 = await axios.get(requests.requestTopRated);
      const response5 = await axios.get(requests.requestUpcoming);
      const response6 = await axios.get(requests.requestTrending);

      const moviesArr = [
        ...response.data.results,
        ...response2.data.results,
        ...response3.data.results,
        ...response4.data.results,
        ...response5.data.results,
        ...response6.data.results,
      ];

      const uniqueMovies = moviesArr.filter(
        (movie, index, self) =>
          index === self.findIndex((m) => m.title === movie.original_title)
      );

      console.log(movies);

      //remove duplicated from the movie array
      setMovies(uniqueMovies);
    };
    fetchMovies();
  }, []);

  const searchMovieHandler = (event) => {
    setSearchMovies(event.target.value);
    console.log(searchMovies);
  };

  //   console.log(movies);

  const setMovie = (movieArr) => {
    dispatch(movieActions.setMovieDetails(movieArr));
  };

  return (
    <div className="h-[1000px]">
      <div className=" flex justify-center relative w-full top-[10%]">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            backgroundColor: "#b3b3b3",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Movie"
            inputProps={{ Lato: "Search Movie" }}
            onChange={searchMovieHandler}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className="text-white grid grid-cols-3 mx-10 relative top-[12%]">
        {movies
          .filter((mov) =>
            mov.title.trim().toLowerCase().includes(searchMovies)
          )
          .map((items) => (
            <div className="my-8 mx-2" key={items.id}>
              <Link to="/details">
                <a
                  onClick={() => {
                    setMovie(items);
                  }}
                >
                  <img
                    className="h-[200px] md:h-[330px] lg:h-[450px] transition-transform duration-300 transform hover:scale-105"
                    src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                    alt={items.original_title}
                  />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesPage;
