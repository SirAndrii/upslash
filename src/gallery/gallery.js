import React from 'react';

import './gallery.css';
import Thumb from './../components/thumb/thumb';

const Gallery =  ({ images }) => {
  return (
    <div className="gallery">
      {images.map(( imgDataObj ) => <Thumb { ...imgDataObj } /> )}
    </div>
  );
}

export default Gallery;

