import React from 'react';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import ActionBar from '../../components/ActionBar/ActionBar';
import './Result.scss';

function Result({ avatar, children }) {
  return (
    <div className='Result'>
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <Message text={`
          Let me know when you're read to see pricing!
        `} />
      </StellaSez>
      <ActionBar actionText={`I'm ready!`} />
    </div>
  );
}

export default Result;
