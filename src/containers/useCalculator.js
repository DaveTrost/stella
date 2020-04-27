import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { 
  getSolarCoLoading, 
  getSolarCoData, 
  getSolarCoId 
} from '../store/solarCompany/reducer';
import { fetchSolarCoFromApi } from '../store/solarCompany/actions';
import {
  getUserDataLoading,
  getUserData,
  getStep,
  getUserUpdateLoading,
  getUserCalculateLoading,
  initialState,
} from '../store/userProgress/reducer';
import {
    setUserData,
    fetchUserDataFromApi,
    initializeUserDataToApi,
    updateUserDataToApi,
    fetchSolarCalculations,
    setStep,
    NEW_USER,
    CALCULATE1,
    CALCULATE2,
    CALCULATE3,
    CALCULATE4,
    RESULT1,
    END,
} from '../store/userProgress/actions';
import { stepLookup, uiStepLookup } from './lookupObjects';

function useCalculator() {
  const history = useHistory();
  const dispatch = useDispatch();
  const solarCoLoading = useSelector(state => getSolarCoLoading(state));
  const solarCoData = useSelector(state => getSolarCoData(state));
  const solarCoId = useSelector(state => getSolarCoId(state));
  const userDataLoading = useSelector(state => getUserDataLoading(state));
  const userUpdateLoading = useSelector(state => getUserUpdateLoading(state));
  const userCalculateLoading = useSelector(state => getUserCalculateLoading(state));
  const userData = useSelector(state => getUserData(state));
  const step = useSelector(state => getStep(state));
  const handleChange = event => dispatch(setUserData({ ...userData, avg_bill: event.target.value }));
  const handleCalculate = () => dispatch(setStep(CALCULATE2));
  const handlePricing = () => dispatch(setStep(END));
  const handleBack = () => dispatch(updateUserDataToApi({ ...initialState.userData, step: CALCULATE1 }));

  const displayLoading = solarCoLoading || userDataLoading;
  const { uiStep, stellaMessages } = stepLookup[step];
  
  useEffect(() => {
    const path = ([RESULT1, END].includes(step))
      ? '/result'
      : '/calculate';
    if(path !== window.location.pathname) {
      history.push(path)
    }
  }, [history, step])

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
    if(step === CALCULATE2 && !userUpdateLoading) dispatch(updateUserDataToApi(userData));
    if(step === CALCULATE4 && !userUpdateLoading) dispatch(updateUserDataToApi(userData));
  }, [dispatch, userData, step, userUpdateLoading]);

  useEffect(() => {
    if(step === CALCULATE3 && ! userCalculateLoading) dispatch(fetchSolarCalculations(userData, solarCoData));
  }, [dispatch, solarCoData, step, userCalculateLoading, userData]);

  return {
    handleChange,
    handleCalculate,
    handleBack,
    handlePricing,
    displayLoading,
    solarCoLoading,
    userDataLoading,
    step,
    solarCoData,
    userData,
    stellaMessages,
    ...uiStepLookup[uiStep],
  }
}

export default useCalculator;
