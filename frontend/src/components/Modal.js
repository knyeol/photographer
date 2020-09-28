import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Modal({ id, imageSrc, modalSrc }) {
  const [showModal, setShowModal] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function handleClick() {
    if (showModal) {
      changeOpacity(0);
      return setTimeout(() => setShowModal(false), 200);
    }
    changeOpacity(1);
    setShowModal((state) => !state);
  }

  function changeOpacity(state) {
    return setTimeout(() => setOpacity(state), 1);
  }

  return (
    <>
      {showModal && (
        <modal-container onClick={handleClick} style={{ opacity: opacity }}>
          <img src={modalSrc} alt="image" />
        </modal-container>
      )}
      <LazyLoadImage onClick={handleClick} key={id} src={imageSrc} />
    </>
  );
}

export default Modal;
