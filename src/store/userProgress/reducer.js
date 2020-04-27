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
    SET_STEP_CALCULATE_2,
    UPDATE_USER_DATA,
    UPDATE_USER_DATA_LOADING,
    UPDATE_USER_DATA_DONE,
    UPDATE_USER_DATA_REJECTED,
    SOLAR_CALCULATIONS,
    SOLAR_CALCULATIONS_LOADING,
    SOLAR_CALCULATIONS_DONE,
    SOLAR_CALCULATIONS_REJECTED,
    CALCULATE1,
    CALCULATE2,
    CALCULATE3,
    CALCULATE4,
} from './actions';

const initialState = Immutable({
  step: LOADING,
  loading: true,
  updateLoading: false,
  calculateLoading: false,
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
      //check payload to determine which state to go to
      return state.merge({ step: CALCULATE1 });
    case INIT_USER_DATA_REJECTED:
      return state.merge({ error: action.payload });
    case SET_STEP_CALCULATE_2:
      return state.merge({ step: CALCULATE2 });
    case UPDATE_USER_DATA_LOADING:
      return state.merge({ updateLoading: true });
    case UPDATE_USER_DATA_DONE:
      return state.merge({ updateLoading: false });
    case UPDATE_USER_DATA:
      return state.merge({ 
        step: CALCULATE3,
        userData: action.payload 
      });
    case UPDATE_USER_DATA_REJECTED:
      return state.merge({ error: action.payload });
    case SOLAR_CALCULATIONS_LOADING:
      return state.merge({ calculateLoading: true });
    case SOLAR_CALCULATIONS_DONE:
      return state.merge({ calculateLoading: false });
    case SOLAR_CALCULATIONS:
      return state.merge({ 
        step: CALCULATE4,
        userData: { ...state.userData, ...action.payload } 
      });
    case SOLAR_CALCULATIONS_REJECTED:
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
export const getUserUpdateLoading = state => state.userProgress.updateLoading;
export const getUserCalculateLoading = state => state.userProgress.calculateLoading;
export const getStep = state => state.userProgress.step;
export const getUserData = state => state.userProgress.userData;
