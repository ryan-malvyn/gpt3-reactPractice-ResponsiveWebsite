import React from 'react';
import './possibility.css';
import GirlWithVR from '../../assets/possibility.png'
const possibility = () => {
    return (
        <div className='possibility-section section_padding'>
            <div class='imagecontainer'>
                <img src={GirlWithVR} alt='VR' />
            </div>
            <div className='content-area'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default possibility