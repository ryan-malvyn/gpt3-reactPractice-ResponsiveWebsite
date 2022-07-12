import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import AI from '../../assets/ai.png';

const header = () => {
    return (
        <div className = 'site-header section_padding' id='home'>
            <div className = 'site-header-content'>
                <h1 className = 'gradient-text'>
                    Let's Build Something
                    amazing with GPT-3 OpenAI
                </h1>

                <p>
                Yet bed any for travelling assistance indulgence unpleasing.
                 Not thoughts all exercise blessing. Indulgence way everything joy 
                 alteration boisterous the attachment. Party we years to order allow asked of. 
                </p>
                
                <div className = 'header-content-input'>
                    <input type='email' placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>

                <div className = 'header-content-reviews'>
                    <img src={people} />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>

            </div>
            <div className = 'ai-image'>
                <img src={AI} alt='ai' /> 
            </div>
        </div>
    )
}

export default header
