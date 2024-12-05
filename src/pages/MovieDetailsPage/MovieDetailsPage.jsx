import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "/src/services/api.js";
import styles from "./MovieDetailsPage.module.css";
import "../../index.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieDetails(movieId);
        setMovie(movieData);
      } catch (err) {
        setError(err.message);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  const {
    title,
    release_date,
    vote_average,
    overview,
    genres = [],
    poster_path,
  } = movie;

  const releaseYear = release_date ? release_date.split("-")[0] : "N/A";
  const formattedGenres = genres.map((genre) => genre.name).join(", ");
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="container">
      <Link to={backLinkRef.current} className={styles.backLink}>
        ← Back
      </Link>
      <div className={styles.details}>
        <img src={posterUrl} alt={title} className={styles.poster} />
        <div className={styles.info}>
          <h1 className={styles.title}>
            {title} ({releaseYear})
          </h1>
          <p className={styles.userScore}>
            <strong>User Score:</strong>{" "}
            {vote_average ? `${Math.round(vote_average * 10)}%` : "N/A"}
          </p>
          <p className={styles.overview}>
            <strong>Overview:</strong> {overview || "No overview available."}
          </p>
          <p className={styles.genres}>
            <strong>Genres:</strong> {formattedGenres || "N/A"}
          </p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to={`cast`} state={{ from: backLinkRef.current }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={{ from: backLinkRef.current }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
