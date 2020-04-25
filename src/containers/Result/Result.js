import React from 'react';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import ActionBar from '../../components/ActionBar/ActionBar';
import './Result.scss';

const finePrint = `To help you go solar, we need your approval to contact you. 
  By clicking above, you agree that [Company] may call & text you about 
  [Company] products at the phone number you entered above, 
  using pre-recorded messages or an autodialer, even if your number is on a "Do Not Call" list. 
  Msg & data rates may apply to text messages. Consent for calls & texts is optional. 
  You can opt-out anytime.`;

function Result({ avatar, children }) {
  return (
    <div className='Result'>
      <StellaSez avatar='https://stella-dev.demand-iq.com/media/avatars/65.jpg'>
        <Message text={`
          Let me know when you're read to see pricing!
        `} />
      </StellaSez>
      <ActionBar actionText={`I'm ready!`} smallText={finePrint} />
    </div>
  );
}

export default Result;
