import React from 'react';
import { useState } from 'react';
import axios from 'axios'
// Components
import ForexNewsData from '../../components/ForexNewsData';

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
        <div>
            <h2>Forex News</h2>
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

            <div id="forex-container">
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
