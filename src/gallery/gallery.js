import React from 'react';

import './gallery.css';
import Thumb from './../components/thumb/thumb';

const Gallery =  ({images}) => {
    
    return (
        <div className="gallery">
          {images.map(({
              id, 
              description, 
              urls, 
              user:{name}, 
              links:{download}
            }) => 
            <Thumb key={id} 
              description={description} 
              urls={urls}
              author={name}
              download = {download}
            /> 
          )}
        </div>
    );
}
export default Gallery;

