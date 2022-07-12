import React from 'react'
import './feature.css' //Connect to CSS File for Feature JSX Component

const feature = ({title, text}) => {
    return (
        <div className = 'feature-container'>
            <div className = 'feature-container-title'>
                <div></div>
                <h1>{title}</h1>
            </div>
            <div className = 'feature-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default feature