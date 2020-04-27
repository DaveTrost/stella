import React from 'react';
import PropTypes from 'prop-types';
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

StellaSez.defaultProps = {
  avatar: '',
}

StellaSez.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default StellaSez;
