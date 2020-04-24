import React from 'react';
import './Message.scss';

function Message({ text }) {
  return (
    <p className='Message'>
      {text}
    </p>
  );
}

export default Message;
