import React, { useState } from 'react'
import './navbar.css' //Connect to CSS File for navbar JSX Component
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { render } from '@testing-library/react';

//BEM -> Block Elements Modifier
const Links = () => (
    /* React Components need to have a capitalized first letter component name */
    <>
    <p><a href='#Home'>Home</a></p>
    <p><a href='#WhatGPT3'>What Is GPT3</a></p>
    <p><a href='#Possibility'>OpenAI</a></p>
    <p><a href='#Features'>Case Studies</a></p>
    <p><a href='#Blog'>Library</a></p>
    </> );


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
        /* Toggle Menu to tell us if the mobile menu has been set */
        /* setToggleMenu to change if it is being shown or not */
        /* useState(false) means at first we are going to show the desktop menu instead of mobile menu */
    return (
        <div className = 'NavBar'>
            <div className = 'NavBar-links'>
                <div className = 'NavBar-links-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className = 'NavBar-links-container'>
                    <Links />
                </div>
            </div>
            <div className = 'NavBar-links-signIn'>
                    <p>Sign In</p>
                    <button type='button'>Sign Up</button>
            </div>
            <div className = 'NavBar-links-mobileMenu'>
                {toggleMenu
                ? < RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                : < RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                    /* RiCloseLine & RiMenu3Line is an icon imported from https://react-icons.github.io/react-icons */
                }
                {toggleMenu && (
                  <div div className='NavBar-links-mobileMenu_container scale-up-center'>
                    <div className='NavBar-links-mobileMenu_links'>
                        <Links />
                        <div className='mobile-signUp'>
                            <p>Sign In</p>
                            <button type='button'>Sign Up</button>
                        </div>
                    </div>
                  </div>
                )}
            </div>
        </div>
    )
}

export default Navbar