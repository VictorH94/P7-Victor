import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route></Route>
      </Routes>

    </div>
  );
}

export default App;
