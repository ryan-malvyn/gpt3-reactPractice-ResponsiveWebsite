import React from 'react';
import './blog.css';
import { Article } from '../../Components'
import { blog01,blog02,blog03,blog04,blog05 } from './imports';

const blog = () => {
    return (
        <div className='blogsection section_padding' id='blog'>
            <div className='blog-header'>
                <h1 className='gradient-text'>A lot is happening, We are blogging about it.</h1>
            </div>
            <div className='blog-grid-container'>
                <div className='left-grid'>
                    <Article imgUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
                <div className='right-grid'>
                    <Article imgUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imgUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imgUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                    <Article imgUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
                </div>
            </div>
        </div>
    )
}

export default blog