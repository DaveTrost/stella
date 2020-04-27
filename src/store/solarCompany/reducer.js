import Immutable from 'seamless-immutable';
import { FETCH_SOLAR_CO_LOADING, FETCH_SOLAR_CO_DONE, FETCH_SOLAR_CO, FETCH_SOLAR_CO_REJECTED } from './actions';

const initialState = Immutable({
  loading: true,
  data: {},
  id: '',
  error: '',
  styleSkin: {
    avatar: '',
  },
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_SOLAR_CO_LOADING:
      return state.merge({loading: true});
    case FETCH_SOLAR_CO_DONE:
      return state.merge({loading: false});
    case FETCH_SOLAR_CO_REJECTED:
      return state.merge({
        error: action.payload,
      });
    case FETCH_SOLAR_CO:
      document.title = action.payload.company_name + ' - Online Estimate';
      return state.merge({
        data: action.payload,
        id: action.payload['chosen_questions'][0]['solar_company'],
      });  
    default:
      return state;
  }
}

// selectors

export const getSolarCoLoading = state => state.solarCompany.loading;
export const getSolarCoData = state => state.solarCompany.data;
export const getSolarCoId = state => state.solarCompany.id;
export const getStyleSkin = state => state.solarCompany.styleSkin;
