import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Header from '../../components/Header/Header';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import InfoScroller from '../InfoScroller/InfoScroller';
import ActionBar from '../../components/ActionBar/ActionBar';
import Footer from '../../components/Footer/Footer';
import './Result.scss';
import { updateUserDataToApi, CALCULATE1 } from '../../store/userProgress/actions';
import { initialState } from '../../store/userProgress/reducer';

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
  const dispatch = useDispatch();
  const history = useHistory();
  const handleBack = () => {
    dispatch(updateUserDataToApi({ ...initialState.userData, step: CALCULATE1 }));
    history.push('/calculate');
  };
  const handlePricing = () => 0;

  return (
    <div className='Result'>
      <Header showStartOver={true} handleStartOver={handleBack} handlePhone={() => 0} />
      <StellaSez avatar={avatar}>
        <Message text={`Check out these savings!`} />
        <InfoScroller items={results} />
      </StellaSez>
      <StellaSez avatar={avatar}>
        <Message text={`
          Let me know when you're ready to see pricing!
        `} />
      </StellaSez>
      <ActionBar actionText={`I'm ready!`} handleAction={handlePricing} handleBack={handleBack} smallText={finePrint} isDisplayed={true} />
      <Footer />
    </div>
  );
}

export default Result;
