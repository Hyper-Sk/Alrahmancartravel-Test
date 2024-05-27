// PhotoLightbox.js
import React, { useState } from 'react';
// import Modal from 'react-modal';
import './gallery.css'

const PhotoLightbox = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=''>
      <div className="all-images section-center">
        {images.map((image, index) => (
          <img
            loading='lazy'
            key={index}
            src={image}
            className='img-loading'
            alt={`Image ${index}`}
            style={{ cursor: 'pointer' }}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {
        modalIsOpen &&
        <section className='model-container' >
          <div className="model-overlay">
            <div className='model'>
              <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
                style={{ width: '100%' }}
              />
              <div class="model-buttons">
                <div className='prev-next' >
                  <button onClick={prevImage}><i class="uil uil-angle-left-b prev"></i></button>
                  <button onClick={nextImage}><i class="uil uil-angle-right-b next"></i></button>
                  <p>{`Image ${currentImageIndex + 1}`}</p>
                </div>
          
                <button onClick={closeModal}><i class="uil uil-multiply close"></i></button>
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  );
};

export default PhotoLightbox;
