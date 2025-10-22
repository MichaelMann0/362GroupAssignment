import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ListingsPage from './pages/ListingsPage';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import FloatingShapes from './components/FloatingShapes';


function App() {
  return (
    <Router>
      <div className="App">
        <FloatingShapes />
        <Header />
        
        <Routes>
          <Route path="/" element={<ListingsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
