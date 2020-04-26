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
