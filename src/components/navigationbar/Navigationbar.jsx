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
      </div>
    </div>
  )
}

export default Navigationbar