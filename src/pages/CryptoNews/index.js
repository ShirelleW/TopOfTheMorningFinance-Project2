import React from 'react';
import { useState } from 'react';
import axios from 'axios'
// Components
import CryptoNewsData from '../../components/CryptoNewsData'

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
        <div>
            <h2>CryptoCurrency News</h2>
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

            <div id="crypto-container">
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

