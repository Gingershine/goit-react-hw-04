import { useState, useEffect } from 'react'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar'
import fetchImagesByName  from './images-api'


function App() {
  
  const [searchQuery, setSearchQuery] = useState(null);
 

  useEffect(() => {
    
    if (!searchQuery) return;
    async function fetchImages() {
      try {
        setSearchQuery([])
        const data = await fetchImagesByName(searchQuery);
        console.log(data);
      // setSearchQuery(data);
      }
      catch {
        console.log('error')
      }      
    } fetchImages()
  }, [searchQuery]);
  
  const onSearchQuerySetup = (query) => {
        setSearchQuery(query);
  }

  return (
    <>
      <SearchBar onSearch={onSearchQuerySetup} />
      <ImageGallery/>
    </>
  )
}

export default App
