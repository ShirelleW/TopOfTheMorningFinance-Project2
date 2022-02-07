import React from 'react';
// CSS
import '../../CSS/HomePageCSS/style.css'
// Components
import MostActive from '../../components/HomePageData/MostActive';
import MostGains from '../../components/HomePageData/MostGains';
import MostLosing from '../../components/HomePageData/MostLosing';
// style
import '../../CSS/HomePageCSS/style.css'

const Home = () => {
    return (
        <div className='home-container'>
            <MostActive />
            <MostGains />
            <MostLosing />
        </div>
    );
}

export default Home;
