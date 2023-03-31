import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import OfferDetails from './pages/OfferDetails'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerDetails/:id" element={<OfferDetails />} />
        </Routes>
        <Footer />
    </div>  
  );
}

export default App;
