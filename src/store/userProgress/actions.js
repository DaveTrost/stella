import { createAction } from 'promise-middleware-redux';
import { getProgress, postProgress, patchProgress } from '../../services/demand-iq/demandIqApi';
import { getTopUrl } from '../../utils/getTopUrl';
import { postCalculation } from '../../services/amazon-aws/amazonAwsApi';

export const LOADING = 'loading';
export const NEW_USER = 'new-user';
export const CALCULATE1 = '/calculate1';
export const CALCULATE2 = '/calculate2';
export const CALCULATE3 = '/calculate3';
export const CALCULATE4 = '/calculate4';
export const RESULT1 = '/result1';
export const RESULT2 = '/result2';
export const END = 'end';
export const INITIAL_AVG_BILL = '250';
export const TEST_ZIP_CODE = '97213';

export const [
  fetchUserDataFromApi,
  FETCH_USER_DATA,
  FETCH_USER_DATA_LOADING,
  FETCH_USER_DATA_DONE,
  FETCH_USER_DATA_REJECTED
] = createAction('FETCH_USER_DATA_FROM_API', () => {
  let res;
  return getProgress()
    .then(response => {
      res = response;
      return response.json()
    })
    .then(body => {
      const isNewUser = /not found/i.test(body.detail);
      if(isNewUser) {
        body.step = NEW_USER;
      } 
      
      if(!res.ok && !isNewUser) {
        /* Note: FETCH_USER_DATA_REJECTED is unreachable unless the promise rejects here ...
          see if this can be done later */
        throw res.error;
      }

      const avg_bill = body.avg_bill || INITIAL_AVG_BILL;
      const step = body.step || CALCULATE1;
      return { ...body, step, avg_bill, zip_code: TEST_ZIP_CODE };
    });
});

export const [
  initializeUserDataToApi,
  INIT_USER_DATA,
  INIT_USER_DATA_LOADING,
  INIT_USER_DATA_DONE,
  INIT_USER_DATA_REJECTED
] = createAction('INIT_USER_DATA_TO_API', solar_company => {
  return postProgress({
    solar_company,
    referring_url: getTopUrl(),
    session_id: 'this-id-does-not-matter-but-it-has-to-exist',
  })
    .then(res => {
      if(!res.ok) {
        throw res.error;
      }
      return { step: CALCULATE1 };
    });
});

export const [
  updateUserDataToApi,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_LOADING,
  UPDATE_USER_DATA_DONE,
  UPDATE_USER_DATA_REJECTED
] = createAction('UPDATE_USER_DATA_TO_API', userData => {
  return patchProgress(userData)
    .then(res => {
      if(!res.ok) {
        throw res.error;
      }
      return res.json();
    });
});

export const [
  fetchSolarCalculations,
  SOLAR_CALCULATIONS,
  SOLAR_CALCULATIONS_LOADING,
  SOLAR_CALCULATIONS_DONE,
  SOLAR_CALCULATIONS_REJECTED,
] = createAction('FETCH_SOLAR_CALCULATIONS', (userData, solarCoData) => {

  const { zip_code: zipcode, avg_bill } = userData;
  const {
    offset: bill_offset,
    product_apr: financing_rate,
    product_term: financing_term,
    dollar_per_watt: price_per_w,
  } = solarCoData;

  return postCalculation({
    avg_bill, zipcode,
    bill_offset, financing_rate, financing_term, price_per_w,
  })
    .then(res => {
      if(!res.ok) {
        throw res.error;
      }
      return res.json()
    });
});

export const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = payload => ({
  type: SET_USER_DATA,
  payload: payload,
});

export const SET_STEP = 'SET_STEP';
export const setStep = step => ({
  type: SET_STEP,
  payload: step,
});
