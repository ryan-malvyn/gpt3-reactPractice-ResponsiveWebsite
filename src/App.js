import React from 'react';
import { Blog, Footer, Header, Possibility, Features, WhatGPT3 } from './Containers';
import { CTA, NavBar, Brand } from './Components';
import './App.css'

const App = () => {
    return (
        <div className = "App">
            <div className = "gradient-bg">
                <NavBar />
                <Header />
                <Brand />
            </div>
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
};

export default App