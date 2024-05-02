import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='gpt__header section padding' id='home'>
      <div className='gpt__header-content'></div>
      <h1 className='gradient__text'>Hello GPT</h1>
      <div className='gpt__geader-content__input'>
        <input type='email'placeholder='Your email address'/>
        <button type='button'>Get started</button>
      </div>

      <div className='gpt__header-content__people'>
        
      </div>
    </div>
  )
}

export default Header