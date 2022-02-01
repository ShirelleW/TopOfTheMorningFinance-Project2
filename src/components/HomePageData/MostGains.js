import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const MostGains = () => {

    const [gainStocks, setGainStocks] = useState([])
    const apiKey = 'API_KEY98YYMRJAV3X1NJSEBVJWIOO2MUIL4CBC'


    const gainers = () => {
        axios.get(`https://api.finage.co.uk/market-information/us/most-gainers?apikey=${apiKey}`)
            .then(response => setGainStocks(response.data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        try{
            gainers()
        }catch (error){
            console.log(error)
        }
    }, []);


    return (
            <div className='gains'>
                <h3>Most Gainer US Stocks</h3>
                <div>
                    {
                        gainStocks.slice(0, 5).map((item) => {
                            return (
                                <div key={item.symbol} className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.company_name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Change Percentage: {item.change_percentage}%</h6>
                                        <p className="card-text">Symbol: {item.symbol}</p>
                                        <p className="card-text">Current Price: ${item.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
    );
}

export default MostGains;
