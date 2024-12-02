import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./services/api";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { images: newImages, totalPages } = await fetchImages(
          query,
          page
        );
        setImages((prevImages) => [...prevImages, ...newImages]);
        setTotalPages(totalPages);

        if (newImages.length === 0) {
          toast.info("No results found. Try a different search term.");
        }
      } catch (err) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery.trim() === "") {
      toast.warn("Please enter a search term.");
      return;
    }

    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} onSelectImage={handleSelectImage} />
      {isLoading && <Loader />}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
      <ToastContainer position="top-right" autoClose={3000} />{" "}
      {/* Контейнер для toast */}
    </div>
  );
};

export default App;
