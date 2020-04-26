import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getStyleSkin } from '../../store/solarCompany/reducer';
import {
    getUserData,
    getUserStep,
    CALCULATE1
} from '../../store/userProgress/reducer';
import { setUserData } from '../../store/userProgress/actions';
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
  const step = useSelector(state => getUserStep(state));
  const progress = step === CALCULATE1 ? 66 : 100;

  const [avgBill, setAvgBill] = useState(userData.avgBill)
  const handleChange = event => setAvgBill(event.target.value);

  const dispatch = useDispatch();
  const handleCalculate = () => dispatch(setUserData({ ...userData, avgBill }))


  const stellaMessages = getStellaMessages(step).map((message, i) => (
    <StellaSez key={i} avatar={styleSkin.avatar}>
      <Message text={message} />
    </StellaSez>
  ));

  const avgBillInput = step === CALCULATE1 && (
    <RangeSlider 
      sliderValue={avgBill} 
      minValue='0' maxValue='1000'
      stepValue='10'
      handleChange={handleChange} />
  );
  
  const actionBar = (
    <ActionBar 
      actionText='Calculate Savings' 
      handleAction={handleCalculate} 
      handleBack={handleCalculate} 
      isDisplayed={step === CALCULATE1} />
  );


  return (
    <div className='Calculate'>
      <Header showStartOver={true} handlePhone={() => 0} />
      <ProgressBar now={progress} />
      {stellaMessages}
      {avgBillInput}
      {actionBar}
      <Footer />
    </div>
  );
}

export default Calculate;
