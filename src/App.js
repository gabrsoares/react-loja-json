import './App.css';
import Header from './Components/header/Header';
import OffBanner from './Components/offBaner/OffBanner';
import SlickerCategories from './Components/slickerCategories/SlickerCategories';
import SlickerSlides from './Components/slickerSlides/SlickerSlides';

function App() {
  return (
    <div className="App">
      <Header />
      <SlickerSlides />
      <OffBanner />
      <SlickerCategories />
    </div>
  );
}

export default App;
