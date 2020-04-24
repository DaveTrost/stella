import React from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import './Calculate.scss';

function Calculate({ avatar, children }) {
  return (
    <div className='Calculate'>
      <ProgressBar now={66} />
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <Message text={`
          Almost done! 
          I just need your most recent monthly electric bill 
          to calculate your savings
        `} />
      </StellaSez>
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <Message text={`
          Hang on. I am calculating your savings...
        `} />
      </StellaSez>
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <Message text={`
          Sizing your solar system...
        `} />
      </StellaSez>
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <Message text={`
          Checking on energy prices...
        `} />
      </StellaSez>
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <Message text={`
          Let me know when you're ready to see pricing!
        `} />
      </StellaSez>
    </div>
  );
}

export default Calculate;
