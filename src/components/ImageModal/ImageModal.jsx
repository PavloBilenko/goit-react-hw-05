import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s["modal-content"]}
      overlayClassName={s["modal-overlay"]}
    >
      <button className={s["close-button"]} onClick={onClose}>
        ×
      </button>
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
    </Modal>
  );
};

export default ImageModal;
