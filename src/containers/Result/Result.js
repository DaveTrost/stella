import React from 'react';
import useCalculator from '../useCalculator';
import { finePrint } from '../lookupObjects';
import Header from '../../components/Header/Header';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import InfoScroller from '../InfoScroller/InfoScroller';
import ActionBar from '../../components/ActionBar/ActionBar';
import Footer from '../../components/Footer/Footer';
import './Result.scss';


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
  const {
    handlePricing, 
    handleBack,
    solarCoData,
    // userData,
    stellaMessages,
    showStartOver,
    showActionBar,
  } = useCalculator();

  const stellaMessageItems = stellaMessages.map((message, i) => {
    const [messagePart, showInfoScroller] = message.split('+');
    return (
      <StellaSez key={i} avatar={solarCoData.ai_avatar}>
        <Message text={messagePart} />
        {showInfoScroller &&
          <InfoScroller items={results} />
        }
      </StellaSez>
    );
  });

  return (
    <div className='Result'>
      <Header 
        showStartOver={showStartOver} 
        handleStartOver={handleBack} 
        handlePhone={() => 0} />
      {stellaMessageItems}
      <ActionBar 
        actionText={`I'm Ready`} 
        handleAction={handlePricing} 
        handleBack={handleBack} 
        isDisplayed={showActionBar}
        smallText={finePrint} 
        />
      <Footer />
    </div>
  );
}

export default Result;
