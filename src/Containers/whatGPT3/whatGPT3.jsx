import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../Components';
import { ColFeature } from '../../Components';

const whatGPT3 = () => {
    return (
        <div className = 'whatGPT3 section_margin' id='WhatGPT3'>
            <div className = 'whatGPT3_Feature'>
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                 His defective nor convinced residence own. Connection has put impossible own apartments boisterous. 
                 At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>
            <div className = 'whatGPT3_heading'>
                <h1 className ='gradient-text'>The possibilities are beyond your imagination.</h1>
                <p>Explore the library</p>
            </div>
            <div className = 'whatGPT3_container'>
                <ColFeature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.' />
                <ColFeature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
                <ColFeature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
            </div>
        </div>
    )
}

export default whatGPT3