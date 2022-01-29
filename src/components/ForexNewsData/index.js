import React from 'react';

const ForexNewsData = (props) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body overflow-auto" style={{ width: '18rem' }}>
                    <h5 className="card-title">{props.forexArticle.title}</h5>
                    <p className="card-text">{props.forexArticle.description}</p>
                    <h6 className="card-title">Source: {props.forexArticle.source}</h6>
                    <a href={props.forexArticle.url} className="btn btn-primary">View Article</a>
                </div>
            </div>
        </div>
    );
}

export default ForexNewsData;
