import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { searchMovies } from "/src/services/api.js";
import styles from "./MoviesPage.module.css";
import "../../index.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const searchResults = await searchMovies(query);
        setMovies(searchResults);
      } catch (err) {
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.search.value.trim();
    if (!searchQuery) return;
    setSearchParams({ query: searchQuery });
  };

  return (
    <div className="container">
      <h1 className={styles.title}>Search Movies</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          name="search"
          type="text"
          placeholder="Enter movie name..."
          defaultValue={query}
          className={styles.searchInput}
        />
        <button
          type="submit"
          className={styles.searchButton}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
