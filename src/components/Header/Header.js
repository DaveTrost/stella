import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import stellaLogo from '../../assets/STELLA LOGO 1.png';
import startOver from '../../assets/startOver.png';
import phoneImg from '../../assets/Phone.png';
import './Header.scss';

function Header({ showStartOver, handleStartOver, handlePhone }) {
  return (
    <header className='Header'>
      <div className='stellaLogo'>
        <img src={stellaLogo} alt='stella logo'></img>
      </div>
      {showStartOver && 
        <div className='startOver'>
          <Button
            action={handleStartOver}
            text='' 
            image={startOver}
            color='clear'
            width='25px'
            height='25px'
          />
        </div>
      }
      <div className='stellaPhone'>
        <Button
          action={handlePhone}
          text='888-781-7074' 
          image={phoneImg} 
          width='147px'
          height='40px'
        />
      </div>
    </header>
  );
}

Header.defaultProps = {
  showStartOver: false,
}

Header.propTypes = {
  showStartOver: PropTypes.bool.isRequired,
  handleStartOver: PropTypes.func,
  handlePhone: PropTypes.func.isRequired,
};

export default Header;
