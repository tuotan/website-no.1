import React from 'react';
import people from '../../assets/ai.png';
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
        <img src={1234567891234567891234567891234567} alt='Hello'/>
        <p>Place</p>
      </div>
    </div>
  )
}

export default Header