import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "/src/services/api.js";
import MovieList from "/src/components/MovieList/MovieList";
import styles from "./HomePage.module.css";
import "../../index.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (err) {
        setError("Failed to fetch trending movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className="container">
      <h1 className={styles.title}>Trending Movies</h1>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default HomePage;
