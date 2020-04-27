import Immutable from 'seamless-immutable';
import {
    SET_USER_DATA,
    SET_STEP,
    RESET_USER_DATA,
    FETCH_USER_DATA,
    FETCH_USER_DATA_LOADING,
    FETCH_USER_DATA_DONE,
    INIT_USER_DATA,
    FETCH_USER_DATA_REJECTED,
    INIT_USER_DATA_REJECTED,
    LOADING,
    CALCULATE1,
    UPDATE_USER_DATA,
    UPDATE_USER_DATA_DONE,
    UPDATE_USER_DATA_REJECTED,
    CALCULATE3
} from './actions';

const initialState = Immutable({
  step: LOADING,
  loading: true,
  userData: {},
  error: '',
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_USER_DATA_LOADING:
      return state.merge({loading: true});
    case FETCH_USER_DATA_DONE:
      return state.merge({loading: false});
    case FETCH_USER_DATA:
      return state.merge({ 
        userData: action.payload, 
        step: action.payload.step,
      }); 
    case FETCH_USER_DATA_REJECTED: 
      return state.merge({ error: action.payload });
    case INIT_USER_DATA:
      return state.merge({ step: CALCULATE1 });
    case INIT_USER_DATA_REJECTED:
      return state.merge({ error: action.payload });
    case UPDATE_USER_DATA_DONE:
      return state.merge({ step: CALCULATE3 });
    case UPDATE_USER_DATA:
      return state.merge({ userData: action.payload });
    case UPDATE_USER_DATA_REJECTED:
      return state.merge({ error: action.payload });
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
