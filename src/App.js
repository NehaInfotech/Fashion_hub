import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './Components/Appbar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ShopGrid from './shop/ShopGrid';
import ShopList from './shop/ShopList';
import ShopFull from './shop/ShopFull';
import Subpage1 from './pages/Subpage1';
import Subpage2 from './pages/Subpage2';
import Subpage3 from './pages/Subpage3';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} /> 

        <Route path="/shop/grid" element={<ShopGrid />} />
        <Route path="/shop/list" element={<ShopList />} />
        <Route path="/shop/full" element={<ShopFull />} />

        <Route path="/pages/subpage1" element={<Subpage1 />} />
        <Route path="/pages/subpage2" element={<Subpage2 />} />
        <Route path="/pages/subpage3" element={<Subpage3 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
