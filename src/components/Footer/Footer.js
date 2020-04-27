import React from 'react';
import fiveStarsImg from '../../assets/five-stars.png';
import lockImg from '../../assets/lock.png';
import './Footer.scss';

function Footer() {
  return (
    <footer className='Footer'>
      <p className='rating'>
        {`Our customers say`}
        <em>Excellent</em>
        <img src={fiveStarsImg} alt='5-star-rating'></img>
        <span className='smaller'>4.97/5</span>
      </p>
      <p className='privacy'>
        <img src={lockImg} alt='secure'></img>
        {`Privacy & Security Guaranteed`}
      </p>
    </footer>
  );
}

export default Footer;
