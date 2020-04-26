import Immutable from 'seamless-immutable';
import { 
  SET_USER_DATA, 
  SET_STEP, 
  RESET_USER_DATA, 
  FETCH_USER_DATA, 
  FETCH_USER_DATA_LOADING, 
  FETCH_USER_DATA_DONE, 
  FETCH_USER_DATA_REJECTED
} from './actions';

export const UNKNOWN = '';
export const ERROR = 'error';
export const CALCULATE1 = '/calculate2';
export const CALCULATE2 = '/calculate3';

const initialState = Immutable({
  loading: true,
  error: '',
  step: UNKNOWN,
  userData: {
    avgBill: '250',
  },
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_DATA_LOADING:
      return state.merge({loading: true});
    case FETCH_USER_DATA_DONE:
      return state.merge({loading: false});
    case FETCH_USER_DATA_REJECTED:
      return state.merge({
        error: action.payload,
        step: ERROR
      });
    case FETCH_USER_DATA:
      return state.merge({
        userData: action.payload,
        step: action.payload.title,
      });
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

export const getUserDataLoading = state => state.userProgress.loading;
export const getStep = state => state.userProgress.step;
export const getUserData = state => state.userProgress.userData;
