import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { 
  getSolarCoLoading, 
  getSolarCoData, 
  getSolarCoId 
} from '../../store/solarCompany/reducer';
import { fetchSolarCoFromApi } from '../../store/solarCompany/actions';
import {
  getUserDataLoading,
  getUserData,
  getStep,
} from '../../store/userProgress/reducer';
import {
    setUserData,
    setStepCalculate2,
    resetUserData,
    fetchUserDataFromApi,
    initializeUserDataToApi,
    updateUserDataToApi,
    fetchSolarCalculations,
    NEW_USER,
    CALCULATE2,
    CALCULATE3,
} from '../../store/userProgress/actions';
import { stepLookup, uiStepLookup } from './lookupObjects';
import Header from '../../components/Header/Header';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import StellaSez from '../../components/StellaSez/StellaSez';
import Message from '../../components/StellaSez/Message';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import ActionBar from '../../components/ActionBar/ActionBar';
import Footer from '../../components/Footer/Footer';
import './Calculate.scss';


function Calculate() {
  const dispatch = useDispatch();
  const solarCoLoading = useSelector(state => getSolarCoLoading(state));
  const solarCoData = useSelector(state => getSolarCoData(state));
  const solarCoId = useSelector(state => getSolarCoId(state));
  const userDataLoading = useSelector(state => getUserDataLoading(state));
  const userData = useSelector(state => getUserData(state));
  const step = useSelector(state => getStep(state));
  const handleChange = event => dispatch(setUserData({ ...userData, avg_bill: event.target.value }));
  const handleCalculate = () => dispatch(setStepCalculate2());
  const handleBack = () => dispatch(resetUserData());


  useEffect(() => {
    if(solarCoLoading) dispatch(fetchSolarCoFromApi());
  }, [dispatch, solarCoLoading]);

  useEffect(() => {
      if(userDataLoading) dispatch(fetchUserDataFromApi());
  }, [dispatch, userDataLoading]);

  useEffect(() => {
    if(step === NEW_USER && solarCoId) dispatch(initializeUserDataToApi(solarCoId));
  }, [dispatch, step, solarCoId]);

  useEffect(() => {
    if(step === CALCULATE2) dispatch(updateUserDataToApi(userData));
  }, [dispatch, userData, step]);

  useEffect(() => {
    if(step === CALCULATE3) dispatch(fetchSolarCalculations(userData, solarCoData));
  }, [dispatch, solarCoData, step, userData]);

  const displayLoading = solarCoLoading || userDataLoading;
  const { uiStep, stellaMessages } = stepLookup[step];
  const { 
    progress,
    showStartOver,
    showProgressBar, showRangeSlider,
    showActionBar, invisibleActionBar,
  } = uiStepLookup[uiStep];
  const stellaMessageItems = stellaMessages.map((message, i) => (
    <StellaSez key={i} avatar={solarCoData.ai_avatar}>
      <Message text={message} />
    </StellaSez>
  ));

  return (
    <div className='Calculate'>
      <Header showStartOver={showStartOver} handleStartOver={handleBack} handlePhone={() => 0} />
      {displayLoading ?
        <h1>Loading ...</h1>
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
          {showActionBar && 
            <ActionBar 
              actionText='Calculate Savings' 
              handleAction={handleCalculate} 
              handleBack={handleBack} 
              isDisplayed={!invisibleActionBar} />
          }
        </>
      }
      <Footer />
    </div>
  );
}

export default Calculate;
