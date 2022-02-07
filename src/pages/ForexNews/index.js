import React from 'react';
import { useState } from 'react';
import axios from 'axios'
// Components
import ForexNewsData from '../../components/ForexNewsData';
//Style
import '../../CSS/MarketNewsCSS/style.css'

const ForexNews = () => {
    const [userInput, setUserInput] = useState('')
    const [newsData, setNewsData] = useState([])
    const apiKey = "API_KEY99OYVBHYYWY38FYRWAKQIUX4E45CMEFJ"

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.get(`https://api.finage.co.uk/news/forex/${userInput}?apikey=${apiKey}`)
            .then(response => (setNewsData(response.data.news)))
            .catch(err => console.error(err))

    }

    return (
        <div className='main-container'>
            <h2 id="title">Forex News</h2>
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

            <div className="forex-container">
                {
                    newsData.map((forexArticle) => {
                        return (
                            <ForexNewsData 
                            key={forexArticle.title}
                            forexArticle={forexArticle}/>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default ForexNews;
