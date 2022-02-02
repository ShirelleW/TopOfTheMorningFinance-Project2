import React from 'react';
import { Routes, Route } from 'react-router-dom'
//Components
import Nav from './components/Nav'
//Pages
import Home from './pages/Home'
import MarketNews from './pages/MarketNews';
import ForexNews from './pages/ForexNews';
import CryptoNews from './pages/CryptoNews';
import StockCharts from './pages/StockCharts';



const App = () => {
  return (
    <div>
    
     <Nav />

     <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='news/market' element={<MarketNews />} /> 
          <Route path='news/forex' element={<ForexNews />} /> 
          <Route path='news/cryptocurrency' element={<CryptoNews />} /> 
          <Route path='stockcharts' element={<StockCharts />} /> 
     </Routes>

    </div>
  );
}

export default App;

