import React from 'react'
import './CTA.css' //Connect to CSS File for CTA JSX Component

const CTA = () => {
    return (
        <div className='ctabox'>
            <div className='cta-content'>
                <p>
                Request Early Access to Get Started
                </p>
                <h3>
                Register today & start exploring the endless possiblities.
                </h3>
            </div>
            <div className='cta-button'>
                <button type='button'>Get Started</button>
            </div>
        </div>
    )
}

export default CTA