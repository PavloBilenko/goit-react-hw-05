import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "/src/services/api.js";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (err) {
        setError(err.message);
      }
    };
    getReviews();
  }, [movieId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id}>
              <p className={styles.author}>{review.author}</p>
              <p className={styles.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default MovieReviews;
