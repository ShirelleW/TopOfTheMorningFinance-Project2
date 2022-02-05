import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import UserContext from '../../Context/UserContext';




const Nav = () => {

    const user = useContext(UserContext)
    
    console.log("nav", user)
    return (
        <div>
            <ul className="nav nav-tabs">
                <li>
                <img src="https://www.protocol.com/media-library/stock-market-up-arrow.jpg?id=24808026&width=1245&quality=85&coordinates=28%2C0%2C29%2C0&height=700" alt="test" style={{width: '75px'}}/>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Top Of The Morning Finance</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Converters and Symbols List</Link>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="converter/currency">Currency Converter</Link></li>
                        <li><Link className="dropdown-item" to="symbolslist">Symbols List</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="news/market">Market News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="news/forex">Forex News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="news/cryptocurrency">CryptoCurrency News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="stockcharts">Market Stock Charts</Link>
                </li>
                {
                    !user 
                    ?
                        <li className="nav-item">
                            <Link className="nav-link" to="login">Login</Link>
                        </li>
                    :
                        <li className="nav-item">
                            <Link className="nav-link" to="generalNews">Hello {user}! View Your Top News Stories</Link>
                        </li>
                }
                
            </ul>
        </div>
    );
}

export default Nav;
