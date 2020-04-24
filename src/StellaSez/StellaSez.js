import React from 'react';
import './StellaSez.scss';

function StellaSez({ avatar, children }) {
  return (
    <div className='StellaSez'>
      <div className='avatar'>
        <img src={avatar} alt='agent avatar'></img>
      </div>
      <div className='message'>
        {children}
      </div>
    </div>
  );
}

export default StellaSez;
