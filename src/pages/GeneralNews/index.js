import React from 'react';
import UserContext from '../../Context/UserContext';
import { useContext, useEffect, useState} from 'react' 
// Components
import GeneralNewsData from '../../components/GeneralNewsData';

const GeneralNews = () => {

    const user = useContext(UserContext) 

    const [generalNews, setGeneralNews] = useState([])
    const apiKey = "ndrhuuanxhvwsf9qc1c0ryxsw8ckhi1lplorcdll"



    useEffect(() => {
        fetch(`https://stocknewsapi.com/api/v1/category?section=alltickers&items=50&token=${apiKey}`)
        .then(response => response.json())
        .then(res => (setGeneralNews(res.data)))
    }, [])

    return (
        <div>
            Hello {user}! Here are the top news stories of today!
            <div id="generalNews-container">
                {
                    generalNews.map((article) => {
                        return (
                            <GeneralNewsData 
                            // key={marketArticle.title}
                            article={article}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default GeneralNews;
