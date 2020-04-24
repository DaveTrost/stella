import React from 'react';
import Button from '../Button/Button';
import stellaLogo from '../../assets/STELLA LOGO 1.png';
import phoneImg from '../../assets/Phone.png';
import './Header.scss';

function Header() {
  return (
    <header  className='Header'>
      <div className='stellaLogo'>
        <img src={stellaLogo} alt='stella logo'></img>
      </div>
      <div className='stellaPhone'>
        <Button
          text='888-781-7074' 
          image={phoneImg} 
          width='147px'
          height='40px'
        />
      </div>
    </header>
  );
}

export default Header;
