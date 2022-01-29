import React from 'react';

const MarketNewsData = (props) => {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body overflow-auto" style={{width: '18rem'}}>
                    <h5 className="card-title">{props.marketArticle.title}</h5>
                    <p className="card-text">{props.marketArticle.description}</p>
                    <a href={props.marketArticle.url} className="btn btn-primary">View Article</a>
                </div>
            </div>
        </div>
    );
}

export default MarketNewsData;
