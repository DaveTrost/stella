import { createAction } from 'promise-middleware-redux';
import { getProgress, postProgress } from '../../services/demand-iq/demandIqApi';
import { getTopUrl } from '../../utils/getTopUrl';
import { NEW_USER, INITIAL_AVG_BILL, CALCULATE1 } from './reducer';

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

      const avgBill = body.avgBill || INITIAL_AVG_BILL;
      const step = body.step || CALCULATE1;
      return { ...body, step, avgBill };
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

export const RESET_USER_DATA = 'RESET_USER_DATA';
export const resetUserData = () => ({ type: RESET_USER_DATA });

export const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = payload => ({
  type: SET_USER_DATA,
  payload: payload,
});

export const SET_STEP = 'SET_STEP';
export const setStep = payload => ({
  type: SET_STEP,
  payload: payload,
});
