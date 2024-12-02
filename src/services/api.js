export const fetchImages = async (query, page) => {
  const ACCESS_KEY = "Zj8SKVO18CIfkkTG5ThfnE02iu6usULna63IZwwg3QA"; // Змініть ключ
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${ACCESS_KEY}&per_page=12`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();
  return {
    images: data.results,
    totalPages: data.total_pages,
  };
};
