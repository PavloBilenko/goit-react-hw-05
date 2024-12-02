import React from "react";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onSelectImage }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={s.ImageGalleryItem}
          onClick={() => onSelectImage(image)}
        >
          <img
            src={image.urls.small}
            alt={image.alt_description}
            className={s.Image}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
