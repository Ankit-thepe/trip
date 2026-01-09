import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TransportPage from './pages/TransportPage';
import DestinationPage from './pages/DestinationPage';
import HotelsPage from './pages/HotelsPage';

const App: React.FC = () => {
  
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/destinations" element={<DestinationPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
