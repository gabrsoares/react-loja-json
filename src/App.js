import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/header/Header';
import OffBanner from './Components/offBaner/OffBanner';
import ProductsPopular from './Components/productsPopular/ProductsPopular';
import SlickerCategories from './Components/slickerCategories/SlickerCategories';
import SlickerSlides from './Components/slickerSlides/SlickerSlides';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
    .then(res => res.json())
    .then((result) => {
      setIsLoaded(true);
      setItems(result);
    }, (error) => {
      setIsLoaded(true);
      setError(error);
    })
  }, [])

  const test = () => {
    console.log(items)
  }

  return (
    <div className="App">
      <Header />
      <SlickerSlides />
      <OffBanner />
      <SlickerCategories />
      <ProductsPopular items={items} />
    </div>
  );
}

export default App;
