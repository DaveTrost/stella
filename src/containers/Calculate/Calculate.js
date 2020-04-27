import React from 'react';
import useCalculator from '../useCalculator';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import ActionBar from '../../components/ActionBar/ActionBar';
import Footer from '../../components/Footer/Footer';
import './Calculate.scss';


function Calculate() {
  const {
    handleChange,
    handleCalculate,
    handleBack,
    displayLoading,
    solarCoData,
    userData,
    stellaMessages,
    progress,
    showStartOver,
    showProgressBar, 
    showRangeSlider,
    showActionBar,
  } = useCalculator();

  const stellaMessageItems = stellaMessages.map((message, i) => (
    <StellaSez key={i} avatar={solarCoData.ai_avatar}>
      <Message text={message} />
    </StellaSez>
  ));

  return (
    <div className='Calculate'>
      <Header showStartOver={showStartOver} handleStartOver={handleBack} handlePhone={() => 0} />
      {displayLoading 
      ?
        <Loading />
      :
        <>
          {showProgressBar && 
            <ProgressBar now={progress} />
          }
          {!displayLoading && stellaMessageItems}
          {showRangeSlider && 
            <RangeSlider 
              sliderValue={userData.avg_bill}
              minValue='0' maxValue='1000'
              stepValue='10'
              handleChange={handleChange} />
          }
        </>
      }
      <ActionBar 
        actionText='Calculate Savings' 
        handleAction={handleCalculate} 
        handleBack={handleBack} 
        isDisplayed={showActionBar} />
      <Footer />
    </div>
  );
}

export default Calculate;
