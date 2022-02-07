import React from 'react';
import { useState } from 'react';
import axios from 'axios'
// Components
import CryptoNewsData from '../../components/CryptoNewsData'
//Style
import '../../CSS/MarketNewsCSS/style.css'

const CryptoNews = () => {
    const [userInput, setUserInput] = useState('')
    const [newsData, setNewsData] = useState([])
    const apiKey = "API_KEY99OYVBHYYWY38FYRWAKQIUX4E45CMEFJ"

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.finage.co.uk/news/cryptocurrency/${userInput}?apikey=${apiKey}`)
            .then(response => (setNewsData(response.data.news)))
            .catch(err => console.error(err))

    }

    return (
        <div className='main-container'>
            <h2 id="title">CryptoCurrency News</h2>
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

            <div className="crypto-container">
                {
                    newsData.map((cryptoArticle) => {
                        return (
                            <CryptoNewsData 
                            key={cryptoArticle.title}
                            cryptoArticle={cryptoArticle}/>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default CryptoNews;

