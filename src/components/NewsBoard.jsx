import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]); // <--- this makes sure data updates when category changes
    return (
        <div>
            <h2 className='text-center text-white'>Latest <span className='badge bg-danger'>News</span></h2>
            {articles.map((news, index) => (
                <NewsItems
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
            ))}
        </div>
    );
};

export default NewsBoard