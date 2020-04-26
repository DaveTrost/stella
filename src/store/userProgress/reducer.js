import Immutable from 'seamless-immutable';
import { SET_USER_DATA, SET_STEP, RESET_USER_DATA } from './actions';

export const CALCULATE1 = '/calculate2';
export const CALCULATE2 = '/calculate3';

const initialState = Immutable({
  step: CALCULATE1,
  userData: {
    avgBill: '250',
  },
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case RESET_USER_DATA:
      return initialState;
    case SET_USER_DATA:
      return state.merge({userData: action.payload});
    case SET_STEP:
      return state.merge({step: action.payload});
    default:
      return state;
  }
}

// selectors

export const getStep = state => state.userProgress.step;
export const getUserData = state => state.userProgress.userData;
