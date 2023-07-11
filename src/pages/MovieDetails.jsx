import React from "react";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const backdrop_path = useSelector((state) => state.backdrop_path);
  const original_title = useSelector((state) => state.original_title);
  const overview = useSelector((state) => state.overview);
  const poster_path = useSelector((state) => state.poster_path);
  const release_date = useSelector((state) => state.release_date);
  const vote_average = useSelector((state) => state.vote_average);

  return (
    <>
      <div className="w-full h-[600px]">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] bg-gradient-to-t from-black "></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={original_title}
          />
        </div>
      </div>
      <div className="absolute top-1/4 w-full">
        <div className="flex flex-col mx-auto items-center md:flex-row">
          <img
            className=" relative h-[240px] md:ml-20 lg:ml-40"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
          />
          <div className="text-white text-sm mx-7">
            <h2 className="text-white text-xl font-bold mt-3 ">
              {original_title}
            </h2>
            <p className=" mt-2">Release Date: {release_date}</p>
            <p className=" mt-2">Rating: {vote_average}</p>
            <p className=" my-5 md:w-[90%] lg:w-[70%]">{overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
