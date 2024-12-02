// src/components/MovieList/MovieList.jsx
import { Link } from "react-router-dom";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => (
  <ul className={styles.list}>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
      </li>
    ))}
  </ul>
);

export default MovieList;
