import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navigationbar.css';

const Navigationbar = () => {
  return (
    <div className='gpt__navigationbar'>
      <div className='gpt__navigationbar-links'>
        <div className='gpt__navigationbar-links__logo'>
          <img src={logo} alt="logo"></img>
        </div>
        <div className='gpt__navigationbar-links_container'></div>
        <p><a href='#home'>Home</a></p>
        <p><a href='#gpt'>What is GPT?</a></p>
        <p><a href='#possibility'>Open AI</a></p>
        <p><a href='#feature'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
      </div >
    </div>
  )
}

export default Navigationbar