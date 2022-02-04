import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
//Components
import Nav from './components/Nav'
//Pages
import Home from './pages/Home'
import MarketNews from './pages/MarketNews';
import ForexNews from './pages/ForexNews';
import CryptoNews from './pages/CryptoNews';
import StockCharts from './pages/StockCharts';
import CurrencyConveter from './pages/CurrencyConverter';
import CryptoConverter from './pages/SymbolsList';
import UserContext from './Context/UserContext';
import Login from './pages/Login';
import SymbolsList from './pages/SymbolsList';



const App = () => {

  const [user, setUser] = useState("")

  return (
    <div>
    
    <UserContext.Provider value={user} >
     
     <Nav />

     <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='news/market' element={<MarketNews />} /> 
          <Route path='news/forex' element={<ForexNews />} /> 
          <Route path='news/cryptocurrency' element={<CryptoNews />} /> 
          <Route path='stockcharts' element={<StockCharts />} /> 
          <Route path='converter/currency' element={<CurrencyConveter />} /> 
          <Route path='symbolslist' element={<SymbolsList />} />
          <Route path='login' element={<Login />} /> 
     </Routes>

     </UserContext.Provider> 
    </div>
  );
}

export default App;

