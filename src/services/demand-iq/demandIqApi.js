import { get, post, patch } from '../request';

const header = {
  'APP-URL': 'https://estimate.sunlytix.com/',
};

// for development only, set to empty string for production
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://stella-dev.demand-iq.com/api/';
const PROGRESSES_URL = `${PROXY_URL}${BASE_URL}progresses/me/`;
export const getProgress = (appUrl2 = '') => {
  return get(PROGRESSES_URL, { ...header, 'APP-URL-2': appUrl2 });
};
export const postProgress = (appUrl2 = '', body) => {
  return post(PROGRESSES_URL, { ...header, 'APP-URL-2': appUrl2 }, body);
};
export const patchProgress = (appUrl2 = '', body) => {
  return patch(PROGRESSES_URL, { ...header, 'APP-URL-2': appUrl2 }, body);
};

const SOLARCOMPANIES_URL = `${BASE_URL}solarcompanies/me/`;
export const getSolarCompany = (appUrl2 = '') => {
  return get(SOLARCOMPANIES_URL, { ...header, 'APP-URL-2': appUrl2 });
};


/* Sample Code:

getSolarCompany('https://somedomain.com')
  .then(({ data }) => console.log(data))
  .catch(error => console.log(error));

*/