import React, {useState,useEffect} from 'react';
import './App.css';

import FetchImages from './API/fetchImages';

import Header from './components/header/header';
import Button from './components/button/button';
import Gallery from './gallery/gallery.js';

function App() {
  const [imagesData,setImagesData] = useState([]);
  const [pageObj, setPageObj] = useState({ page: 1, per_page: 9});
  const [loading, setLoading] = useState(true);

  const loadText = loading ? 'Loading' : 'Load More';

  useEffect( () => {
    const loadGallery = async ( obj ) => {
      setLoading( true );
      const data = await new FetchImages().getThumbsData( obj );
      
      setImagesData( prev => [...prev, ...data] ); 
      setLoading( false );
    };

    loadGallery( pageObj );
  }, [pageObj]);

  const loadMore = () => {
    setPageObj(
      ( {page} ) => ( { ...pageObj, page: page + 1} )
    );
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
