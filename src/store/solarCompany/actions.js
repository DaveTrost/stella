import { createAction } from 'promise-middleware-redux';
import { getSolarCompany } from '../../services/demand-iq/demandIqApi';

export const [
  fetchSolarCoFromApi,
  FETCH_SOLAR_CO,
  FETCH_SOLAR_CO_LOADING,
  FETCH_SOLAR_CO_DONE,
  FETCH_SOLAR_CO_REJECTED
] = createAction('FETCH_SOLAR_CO_FROM_API', () => {
  return getSolarCompany()
    .then(res => res.json());
});
