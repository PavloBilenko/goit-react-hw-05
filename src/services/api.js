import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDVlMjJkZjU3NTA0NzI4NTVjY2MzODQ1YzRiOWVjYyIsIm5iZiI6MTczMzE3MDA1MS4yNCwic3ViIjoiNjc0ZTEzODNhZjZiM2UwMTgyYTFjNDEwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Mt3pPc4KxevSX9pQqC8wIVbsDNFHxM6euguwOf2CEZQ"; // Замініть на ваш API Read Access Token
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error.message);
    throw new Error("Failed to fetch trending movies. Please try again later.");
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { query },
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error.message);
    throw new Error("Failed to search movies. Please try again later.");
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    throw new Error("Failed to fetch movie details. Please try again later.");
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error.message);
    throw new Error("Failed to fetch movie cast. Please try again later.");
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error.message);
    throw new Error("Failed to fetch movie reviews. Please try again later.");
  }
};
