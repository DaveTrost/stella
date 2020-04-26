import Immutable from 'seamless-immutable';
import { SET_USER_DATA } from './actions';

export const CALCULATE1 = '/calculate2';
export const CALCULATE2 = '/calculate3';

const initialState = Immutable({
  userStep: CALCULATE1,
  userData: {
    avgBill: '250',
  },
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER_DATA:
      return state.merge({userData: action.payload});
    default:
      return state;
  }
}

// selectors

export const getUserStep = state => state.userProgress.userStep;
export const getUserData = state => state.userProgress.userData;
