import React from 'react'
import { useState } from 'react';
import axios from 'axios'
// Components
import MarketNewsData from '../../components/MarketNewsData'
//Style
import '../../CSS/MarketNewsCSS/style.css'

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
        <div className='main-container'>
            <h2 id="title" >Market News</h2>
            {/* {console.log('data test', newsData)} */}
            <form id="form" onSubmit={handleSubmit}>
                <input
                    type='text'
                    id='userInput'
                    name='userInput'
                    placeholder='Search...'
                    onChange={handleChange}
                    value={userInput}
                />
                <input type="submit" value='submit' />
            </form> <br />

            <div className="market-container">
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
