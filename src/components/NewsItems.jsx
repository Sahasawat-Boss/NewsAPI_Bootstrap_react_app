import React from 'react';
import placeholderImage from '../assets/news-img.jpg';

const NewsItems = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light shadow-sm mt-4 my-2 mx-4 p-3">
            <img
                src={src || placeholderImage}
                className="card-img-top img-fluid"
                alt={title || 'News Image'}
                style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column justify-content-between pb-3">
                <h5 className="card-title">
                    {title || 'Untitled News'}
                </h5>
                <p className="card-text small flex-grow-1">
                    {description
                        ? description.slice(0, 200) + (description.length > 200 ? '...' : '')
                        : 'No description available.'}
                </p>
                <a
                    href={url}
                    className="btn btn-outline-light btn-sm mt-2 align-self-start"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItems;
