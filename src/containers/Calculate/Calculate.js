import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getStyleSkin } from '../../store/solarCompany/reducer';
import {
    getUserData,
    getStep,
    CALCULATE1,
    CALCULATE2
} from '../../store/userProgress/reducer';
import { setUserData, setStep, resetUserData } from '../../store/userProgress/actions';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { getStellaMessages } from './stellaMessages';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import ActionBar from '../../components/ActionBar/ActionBar';
import Footer from '../../components/Footer/Footer';
import './Calculate.scss';

function Calculate() {
  const styleSkin = useSelector(state => getStyleSkin(state));
  const userData = useSelector(state => getUserData(state));
  const step = useSelector(state => getStep(state));
  const progress = step === CALCULATE1 ? 66 : 100;

  const dispatch = useDispatch();
  const handleChange = event => dispatch(setUserData({ ...userData, avgBill: event.target.value }));
  const handleCalculate = () => dispatch(setStep(CALCULATE2));
  const handleBack = () => dispatch(resetUserData());

  const stellaMessages = getStellaMessages(step).map((message, i) => (
    <StellaSez key={i} avatar={styleSkin.avatar}>
      <Message text={message} />
    </StellaSez>
  ));

  const avgBillInput = step === CALCULATE1 && (
    <RangeSlider 
      sliderValue={userData.avgBill} 
      minValue='0' maxValue='1000'
      stepValue='10'
      handleChange={handleChange} />
  );
  
  const actionBar = (
    <ActionBar 
      actionText='Calculate Savings' 
      handleAction={handleCalculate} 
      handleBack={handleBack} 
      isDisplayed={step === CALCULATE1 /*|| 1*/} />
  );

  const headerProps = step === CALCULATE1 && ({
    showStartOver: true,
    handleStartOver: handleBack,
  });


  return (
    <div className='Calculate'>
      <Header { ...headerProps } handlePhone={() => 0} />
      <ProgressBar now={progress} />
      {stellaMessages}
      {avgBillInput}
      {actionBar}
      <Footer />
    </div>
  );
}

export default Calculate;
