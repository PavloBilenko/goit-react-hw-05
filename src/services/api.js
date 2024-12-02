import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDVlMjJkZjU3NTA0NzI4NTVjY2MzODQ1YzRiOWVjYyIsIm5iZiI6MTczMzE3MDA1MS4yNCwic3ViIjoiNjc0ZTEzODNhZjZiM2UwMTgyYTFjNDEwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Mt3pPc4KxevSX9pQqC8wIVbsDNFHxM6euguwOf2CEZQ"; // Замініть на ваш API Read Access Token
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` }, // Використовуйте токен
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { query },
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });
  return response.data.results;
};
