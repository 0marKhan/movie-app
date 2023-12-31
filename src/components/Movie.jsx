import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { movieActions } from "../store";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const dispatch = useDispatch();

  const setMovie = (movieArr) => {
    dispatch(movieActions.setMovieDetails(movieArr));
  };

  return (
    <div className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />

      <Link to="/details">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={() => setMovie(item)}>
          <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              {item?.title}
            </p>
            <p>
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Movie;
