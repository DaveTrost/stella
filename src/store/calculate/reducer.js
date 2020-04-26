import Immutable from 'seamless-immutable';
import { SET_USER_DATA } from './actions';

export const CALCULATE1 = '/calculate2';
export const CALCULATE2 = '/calculate3';

const initialState = Immutable({
  userStep: CALCULATE1,
  userData: {
    avgBill: '250',
  },
  solarCoSkin: {
    avatar: 'https://stella-dev.demand-iq.com/media/avatars/65.jpg',
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

export const getUserStep = state => state.calculate.userStep;
export const getUserData = state => state.calculate.userData;
export const getSolarCoSkin = state => state.calculate.solarCoSkin;
