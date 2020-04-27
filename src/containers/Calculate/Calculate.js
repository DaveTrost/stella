import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
  getSolarCoLoading, 
  getSolarCoData, 
} from '../../store/solarCompany/reducer';
import { fetchSolarCoFromApi } from '../../store/solarCompany/actions';
import {
  getUserDataLoading,
  getUserData,
  getStep,
  NEW_USER,
  CALCULATE1,
  CALCULATE2,
} from '../../store/userProgress/reducer';
import { 
  setUserData, 
  setStep, 
  resetUserData, 
  fetchUserDataFromApi,
} from '../../store/userProgress/actions';
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
  const solarCoLoading = useSelector(state => getSolarCoLoading(state));
  const solarCoData = useSelector(state => getSolarCoData(state));
  const userDataLoading = useSelector(state => getUserDataLoading(state));
  const userData = useSelector(state => getUserData(state));
  const step = useSelector(state => getStep(state));

  const dispatch = useDispatch();
  const handleChange = event => dispatch(setUserData({ ...userData, avgBill: event.target.value }));
  const handleCalculate = () => dispatch(setStep(CALCULATE2));
  const handleBack = () => dispatch(resetUserData());

  useEffect(() => {
    if(solarCoLoading) dispatch(fetchSolarCoFromApi());
  }, [dispatch, solarCoLoading]);

  useEffect(() => {
      if(userDataLoading) dispatch(fetchUserDataFromApi());
  }, [dispatch, userDataLoading]);

  const displayLoading = solarCoLoading || userDataLoading;
  const uiStep = (step === NEW_USER) ? CALCULATE1 : step;
  const progress = (uiStep === CALCULATE2) ? 100 : 66;

  const stellaMessages = getStellaMessages(uiStep, solarCoLoading).map((message, i) => (
    <StellaSez key={i} avatar={solarCoData.ai_avatar}>
      <Message text={message} />
    </StellaSez>
  ));

  const avgBillInput = uiStep === CALCULATE1 && (
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
      isDisplayed={uiStep === CALCULATE1} />
  );

  const headerProps = uiStep === CALCULATE1 && ({
    showStartOver: true,
    handleStartOver: handleBack,
  });


  return (
    <div className='Calculate'>
      <Header { ...headerProps } handlePhone={() => 0} />
      {displayLoading ?
        <h1>Loading ...</h1>
      :
        <>
          <ProgressBar now={progress} />
          {stellaMessages}
          {avgBillInput}
          {actionBar}
        </>
      }
      <Footer />
    </div>
  );
}

export default Calculate;
