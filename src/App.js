import React, {useState,useEffect} from 'react';
import './App.css';

import FetchImages from './API/fetchImages';

import Header from './components/header/header';
import Button from './components/button/button';
import Gallery from './gallery/gallery.js';

function App() {

  const [imagesData,setImagesData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const loadText = loading ? 'Loading' : 'Load More';

  useEffect( () => {
    const loadGallery = async(page) => {
      setLoading(true);

      const data = await new FetchImages(page).getThumbsData();
      
      setImagesData(prev=>[...prev, ...data]); 
      setLoading(false);
    };

    loadGallery(page);
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };
  
  return (
    <div className="App">
      <Header>Unsplash wallpaper downloader</Header>
      <Gallery images={ imagesData }/>
      <Button onclick={loadMore}>{ loadText }</Button>
    </div>
  );
}

export default App;
