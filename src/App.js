import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SightTour from './pages/SightTour';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import WeddingCars from './pages/WeddingCars';
import CarRental from './pages/CarRental';
import Blog from './pages/Blog';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/car-rental' element={<CarRental />} />
          <Route path='/sightseeing-tour' element={<SightTour />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/wedding-cars' element={<WeddingCars />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/gallery-page' element={<GalleryPage />} />
        </Routes>
    </ BrowserRouter >
  );
}

export default App;
