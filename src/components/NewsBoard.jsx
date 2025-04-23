import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Start loading
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
                setLoading(false); // Done loading
            });
    }, [category]); // <--- this makes sure data updates when category changes
    return (
        <div>
            <h2 className='text-center text-white mt-3'>Latest <span className='badge bg-danger'>News</span></h2>

            {loading ? (
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "150px" }}>
                    <div className="spinner-border text-light mb-2" role="status"></div>
                    <div className="text-light">Loading...</div>
                </div>

            ) : (
                articles.map((news, index) => (
                    <NewsItems
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))
            )}
        </div>
    );
};

export default NewsBoard