import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import '../../CSS/SymbolsListCSS/style.css'

const SymbolsList = () => {

    const [stockSymbols, setStockSymbols] = useState([])
    const [forexSymbols, setForexSymbols] = useState([])
    const [cryptoSymbols, setCryptoSymbols] = useState([])


    useEffect(() => {
        fetch("https://api.finage.co.uk/symbol-list/us-stock?page=1&apikey=API_KEY98YYMRJAV3X1NJSEBVJWIOO2MUIL4CBC")
            .then(res => res.json())
            .then(res => setStockSymbols(res.symbols))
    }, [])

    useEffect(() => {
        fetch("https://api.finage.co.uk/symbol-list/forex?page=1&apikey=API_KEY98YYMRJAV3X1NJSEBVJWIOO2MUIL4CBC")
            .then(res => res.json())
            .then(res => setForexSymbols(res.symbols))
    }, [])

    useEffect(() => {
        fetch("https://api.finage.co.uk/symbol-list/crypto?page=1&apikey=API_KEY98YYMRJAV3X1NJSEBVJWIOO2MUIL4CBC")
            .then(res => res.json())
            .then(res => setCryptoSymbols(res.symbols))
    }, [])



    return (
        <div className="symbolsList">
            <div className='usSymbols'>
                <h3>US Stock Market Symbols</h3>
                {
                    stockSymbols.map((stocks) => {
                        return (
                            <div key={stocks.symbol}>
                                <div class="card" style={{width: '18rem'}}>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <h5>{stocks.symbol}</h5>
                                            <br/>{stocks.name}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='forexSymbols'>
                <h3>Forex Symbols</h3>
                {
                    forexSymbols.map((stocks) => {
                        return (
                            <div key={stocks.symbol}>
                            <div class="card" style={{width: '18rem'}}>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                    <h5>{stocks.symbol}</h5>
                                    <br/>{stocks.name}</li>
                                </ul>
                            </div>
                        </div>
                        )
                    })
                }
            </div>

            <div className='cryptoSymbols'>
                <h3>Crypto Symbols</h3>
                {
                    cryptoSymbols.map((stocks) => {
                        return (
                            <div key={stocks.symbol}>
                            <div class="card" style={{width: '18rem'}}>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <h5>{stocks.symbol}</h5>
                                        <br/>{stocks.name}</li>
                                </ul>
                            </div>
                        </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default SymbolsList;
