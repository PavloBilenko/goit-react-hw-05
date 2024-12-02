// src/pages/HomePage/HomePage.jsx
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "..//..//services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return <MovieList movies={movies} />;
};

export default HomePage;
