import React, {useState,useEffect} from 'react';
import './App.css';

import Header from './components/header/header';
import Button from './components/button/button';
import Gallery from './gallery/gallery.js';

const url = 'https://api.unsplash.com/photos?client_id=Jp9WhFlqSx3me1er2KUL1ikeamrjUZZJrPtrSsuoLBs';

function App() {

  const [images,setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState('loading');

  useEffect( () => {
    const loadGallery = async(page) => {
      const response = await fetch(`${url}&page=${page}&per_page=9`);
      const data = await response.json();
      
      setImages(prev=>[...prev, ...data]); 
      setLoading('Load More');
    };

    loadGallery(page);
  }, [page]);

  const loadMore = evt => {
    evt.preventDefault();
    setPage(page + 1);
    setLoading('Loading');
  };
  
  return (
    <div className="App">
      <Header>Unsplash wallpaper downloader</Header>
      <Gallery images={images}/>
      <Button onclick={loadMore}>{loading}</Button>
    </div>
  );
}

export default App;
