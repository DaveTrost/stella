import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

function Message({ text }) {
  return (
    <p className='Message'>
      {text}
    </p>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
