import React from 'react'

const NewsItems = (title, description, src, url) => {
    return (
        <div className="card" style={{ maxwidth: "345px" }}>
            <img src={src} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItems