// App.js
import React from 'react';
import PhotoLightbox from './PhotoLightbox';
import images from './../../store/galleryImages'
const Gallery = () => {
  
  return (
    <>
      <PhotoLightbox images={images} />
    </>
  );
};

export default Gallery;
