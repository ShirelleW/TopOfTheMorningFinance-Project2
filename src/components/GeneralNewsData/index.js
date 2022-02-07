import React from 'react';

const GeneralNewsData = (props) => {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src={props.article.image_url} class="card-img-top" alt="broken link" />
                <div class="card-body">
                    <h5 class="card-title">{props.article.title}</h5><br />
                    <h6 class="card-title">{props.article.date}</h6><br />
                    <p class="card-text">{props.article.text}</p>
                    <p class="card-text">Source: {props.article.source_name}</p>
                    <h6 class="card-text">Sentiment: {props.article.sentiment}</h6>
                    <a href={props.article.news_url} class="btn btn-primary">Go To Article</a>
                </div>
        </div>
    );
}

export default GeneralNewsData;
