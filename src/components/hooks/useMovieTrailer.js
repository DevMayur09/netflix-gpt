import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTrailerOfMovie } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
  
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const responseJson = await data.json();

    const filterTrailers = responseJson.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailers ? filterTrailers[0] : responseJson.results[0];
    dispatch(addTrailerOfMovie(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer;