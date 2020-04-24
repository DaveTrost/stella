import React from 'react';
import StellaSez from '../../StellaSez/StellaSez';
import './Calculate.scss';

function Calculate({ avatar, children }) {
  return (
    <div className='Calculate'>
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <p>
          Almost done! 
          I just need your most recent monthly electric bill 
          to calculate your savings
        </p>
      </StellaSez>
    </div>
  );
}

export default Calculate;
