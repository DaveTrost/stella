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


const buildResults = (userData, { product_term }) => {
  const { 
    savings, 
    co2_tons, 
    install_size_min, install_size_max, 
    panels_min, panels_max
  } = userData
  const savingsDisplay = (Math.round(savings)).toLocaleString('en');
  return ([
  {
    headerText: 'Approximate Lifetime Savings',
    text: '$' + savingsDisplay,
    subText: `Over ${product_term} years`,
  },
  {
    headerText: 'Increase in Home Value',
    text: '4.1%',
    subText: 'According to Zillow',
  },
  {
    headerText: 'Environmental Impact',
    text: `${co2_tons}`,
    subText: 'Tons of CO2 avoided',
  },
  {
    headerText: 'Recommended System',
    text: `${install_size_min}-${install_size_max} kW`,
    subText: `(${panels_min}-${panels_max} panels)`,
  },
]);
}


function Result() {
  const {
    handlePricing, 
    handleBack,
    solarCoData,
    userData,
    stellaMessages,
    showStartOver,
    showActionBar,
  } = useCalculator();

  const results = buildResults(userData, solarCoData);

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
