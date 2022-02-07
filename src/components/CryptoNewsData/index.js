import React from 'react';

const Index = (props) => {
    return (
        <div>
            <div>
                <div className="card" id='newsCards' style={{ width: '18rem' }}>
                    <div className="card-body overflow-auto" style={{ width: '18rem' }}>
                        <h5 className="card-title">{props.cryptoArticle.title}</h5>
                        <p className="card-text">{props.cryptoArticle.description}</p>
                        <h6 className="card-title">Source: {props.cryptoArticle.source}</h6>
                        <a href={props.cryptoArticle.url} className="btn btn-primary">View Article</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
