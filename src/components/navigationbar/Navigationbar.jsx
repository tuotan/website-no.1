import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navigationbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#gpt'>What is GPT?</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#feature'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)
const Navigationbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt__navigationbar'>
      <div className='gpt__navigationbar-links'>
        <div className='gpt__navigationbar-links_logo'>
          <img src={logo} alt="logo"></img>
        </div>
        <div className='gpt__navigationbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt__navigationbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt__navigationbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='gpt__navigationbar-menu_container scale-up-center'>
            <div className='gpt__navigationbar-menu_container-links'>
              <Menu />
            </div>
            <div className='gpt__navigationbar-menu-container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigationbar