import React from 'react';
import './colFeature.css';

const colFeature = ({title,text}) => {
    return (
        <div>
            <div className='line'>
            </div>
            <div className = 'content'>
                <h1 className = 'title'>
                    {title}
                </h1>
                <p className = 'textContent'>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default colFeature;