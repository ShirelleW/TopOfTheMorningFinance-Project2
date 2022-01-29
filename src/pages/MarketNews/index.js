import React from 'react'
import { useState } from 'react';
import axios from 'axios'
// Components
import MarketNewsData from '../../components/MarketNewsData'

// https://api.finage.co.uk/news/market/amzn?apikey=API_KEY99OYVBHYYWY38FYRWAKQIUX4E45CMEFJ

//API KEY = API_KEY99OYVBHYYWY38FYRWAKQIUX4E45CMEFJ

const MarketNews = () => {
    const [userInput, setUserInput] = useState('')
    const [newsData, setNewsData] = useState([])
    const apiKey = "API_KEY99OYVBHYYWY38FYRWAKQIUX4E45CMEFJ"

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.finage.co.uk/news/market/${userInput}?apikey=${apiKey}`)
            .then(response => (setNewsData(response.data.news)))
            .catch(err => console.error(err))

    }

    return (
        <div>
            <h2>Market News</h2>
            {console.log('data test', newsData)}
            <form onSubmit={handleSubmit}>
                <label htmlFor='userInput'>Search: </label>
                <input
                    type='text'
                    id='userInput'
                    name='userInput'
                    onChange={handleChange}
                    value={userInput}
                />
                <input type="submit" value='submit' />
            </form>

            <div id="market-container">
                {
                    newsData.map((marketArticle) => {
                        return (
                            <MarketNewsData 
                            key={marketArticle.title}
                            marketArticle={marketArticle}/>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default MarketNews;
