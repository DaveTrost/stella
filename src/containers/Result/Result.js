import React from 'react';
import Header from '../../components/Header/Header';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import InfoScroller from '../InfoScroller/InfoScroller';
import ActionBar from '../../components/ActionBar/ActionBar';
import Footer from '../../components/Footer/Footer';
import './Result.scss';

const finePrint = `To help you go solar, we need your approval to contact you. 
  By clicking above, you agree that [Company] may call & text you about 
  [Company] products at the phone number you entered above, 
  using pre-recorded messages or an autodialer, even if your number is on a "Do Not Call" list. 
  Msg & data rates may apply to text messages. Consent for calls & texts is optional. 
  You can opt-out anytime.`;
const avatar = 'https://stella-dev.demand-iq.com/media/avatars/65.jpg';
const results = [
  {
    headerText: 'Approximate Lifetime Savings',
    text: '$63,500',
    subText: 'Over 25 years',
  },
  {
    headerText: 'Increase in Home Value',
    text: '4.1%',
    subText: 'According to Zillow',
  },
  {
    headerText: 'Environmental Impact',
    text: '500',
    subText: 'Tons of CO2 avoided',
  },
  {
    headerText: 'Recommended System',
    // text: '10-12 <sub>kW</sub>',
    text: '10-12 kW',
    subText: '(33-40 panels)',
  },
];

function Result() {
  return (
    <div className='Result'>
      <Header showStartOver={true} />
      <StellaSez avatar={avatar}>
        <Message text={`Check out these savings!`} />
        <InfoScroller items={results} />
      </StellaSez>
      <StellaSez avatar={avatar}>
        <Message text={`
          Let me know when you're ready to see pricing!
        `} />
      </StellaSez>
      <ActionBar actionText={`I'm ready!`} smallText={finePrint} isDisplayed={true} />
      <Footer />
    </div>
  );
}

export default Result;
