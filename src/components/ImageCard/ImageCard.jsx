import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={s.ImageCard}>
      <img
        className={s.Image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
