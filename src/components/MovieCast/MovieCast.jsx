import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "/src/services/api.js";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCast(movieId);
        setCast(castData);
      } catch (err) {
        setError(err.message);
      }
    };
    getCast();
  }, [movieId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cast</h2>
      <ul className={styles.castList}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <span className={styles.actorName}>{actor.name}</span> as{" "}
            {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
