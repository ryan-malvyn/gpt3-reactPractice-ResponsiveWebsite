import React from 'react'
import './article.css'; //Connect to CSS File for Article JSX Component

const Article = ({imgUrl,date,title}) => {
    return (
        <div className='article-container'>
            <div className='img-container'>
                <img src={imgUrl} alt='blog image' />
            </div>
            <div className='article-details'>
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article