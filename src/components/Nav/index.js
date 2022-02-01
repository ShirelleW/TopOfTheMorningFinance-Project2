import React from 'react';
import { Link } from 'react-router-dom'




const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src="https://www.protocol.com/media-library/stock-market-up-arrow.jpg?id=24808026&width=1245&quality=85&coordinates=28%2C0%2C29%2C0&height=700" alt="test" style={{width: '75px'}}/>
                    <Link className="navbar-brand" to="/">Top Of The Morning Finance</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="news/market">Market News</Link>
                            <Link className="nav-link" to="news/forex">Forex News</Link>
                            <Link className="nav-link" to="news/cryptocurrency">CryptoCurrency News</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Nav;
