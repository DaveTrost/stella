import { get, post, patch } from '../request';

// for development only, set to empty string for production
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://stella-dev.demand-iq.com/api/';

const header = {
  'APP-URL': 'https://estimate.sunlytix.com/',
};


const PROGRESSES_URL = `${BASE_URL}progresses/me/`;
export const getProgress = () => {
  return get(PROGRESSES_URL, header, 'include');
};
export const postProgress = body => {
  return post(PROGRESSES_URL, header, body, 'include');
};
export const patchProgress = body => {
  return patch(PROGRESSES_URL, header, body, 'include');
};

const SOLARCOMPANIES_URL = `${BASE_URL}solarcompanies/me/`;
export const getSolarCompany = () => {
  return get(SOLARCOMPANIES_URL, header);
};
