import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import OfferDetails from './pages/OfferDetails'
import Footer from './components/footer/Footer';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Définir les différentes routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/details-annonce/:id" element={<OfferDetails />} />
      </Routes>
      <Footer />
    </div>  
  );
}

export default App;
