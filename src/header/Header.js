import React from 'react';
import stellaLogo from '../assets/STELLA LOGO 1.png';
import phoneImg from '../assets/Phone.png';
import './Header.scss';

function Header() {
  return (
    <header  className='Header'>
      <div className='stellaLogo'>
        <img src={stellaLogo} alt='stella logo'></img>
      </div>
      <button className='stellaPhone' id='stellaPhone'>
        <label htmlFor='stellaPhone'>
          <img src={phoneImg} alt='phone'></img>
          888-781-7074
        </label>
      </button>
    </header>
  );
}

export default Header;
