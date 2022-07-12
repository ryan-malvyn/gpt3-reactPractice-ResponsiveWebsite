import React from 'react'
import './brand.css'; //Connect to CSS File for Brand JSX Component
import { Google, Shopify, Slack, Atlassian, DropBox } from './imports';

const Brand = () => {
    return (
        <div className = 'brands section_padding'>
            <div>
                <img src={Google} alt='Google' />
            </div>
            <div>
                <img src={Slack} alt='Slack' />
            </div>
            <div>
                <img src={Atlassian} alt='Atlassian' />
            </div>
            <div>
                <img src={DropBox} alt='DropBox' />
            </div>
            <div>
                <img src={Shopify} alt='Shopify' />
            </div>
        </div>
    )
}

export default Brand