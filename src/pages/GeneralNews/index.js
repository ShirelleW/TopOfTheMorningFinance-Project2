import React from 'react';
import UserContext from '../../Context/UserContext';
import { useContext, useEffect, useState} from 'react' 
// Components
import GeneralNewsData from '../../components/GeneralNewsData';
// style
import '../../CSS/GeneralNewsCSS/style.css'

const GeneralNews = () => {

    const user = useContext(UserContext) 

    const [generalNews, setGeneralNews] = useState([])
    const apiKey = "9mm7ze1pv65x1uuqoyeg5pgrr44psuuvttulvmr2"



    useEffect(() => {
        fetch(`https://stocknewsapi.com/api/v1/category?section=alltickers&items=50&token=${apiKey}`)
        .then(response => response.json())
        .then(res => (setGeneralNews(res.data)))
    }, [])

    return (
        <div className='generalNews-container'>
           <h3 id="greeting" >Hello {user}! Here are the top news stories of today! </h3>
            <div id="generalNews-container-cards">
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
