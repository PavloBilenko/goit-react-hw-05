import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={s.LoadMoreButton} onClick={onLoadMore}>
      Load more ...
    </button>
  );
};

export default LoadMoreBtn;
