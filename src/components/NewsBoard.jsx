import React, { useState, useEffect } from 'react'

const [article, setArticle] = useState([]);

useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${impport.meta.env.VITE_API_KEY}`
})


const NewsBoard = () => {
    return (
        <div>
            <h2 className='text-center text-white'>Latest <span className='badge bg-danger'>New</span></h2>
        </div>
    )
}

export default NewsBoard