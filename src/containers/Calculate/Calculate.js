import React from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import ActionBar from '../../components/ActionBar/ActionBar';
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
      <ActionBar actionText='Calculate Savings' />
    </div>
  );
}

export default Calculate;
