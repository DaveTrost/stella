import { get, post, patch } from '../request';

const header = {
  'APP-URL': 'https://estimate.sunlytix.com/',
};

const PROGRESSES_URL = 'https://cors-anywhere.herokuapp.com/https://stella-dev.demand-iq.com/api/progresses/me/';
export const getProgress = (appUrl2 = '') => {
  return get(PROGRESSES_URL, { ...header, 'APP-URL-2': appUrl2 });
};
export const postProgress = (appUrl2 = '', body) => {
  return post(PROGRESSES_URL, { ...header, 'APP-URL-2': appUrl2 }, body);
};
export const patchProgress = (appUrl2 = '', body) => {
  return patch(PROGRESSES_URL, { ...header, 'APP-URL-2': appUrl2 }, body);
};

const SOLARCOMPANIES_URL = 'https://cors-anywhere.herokuapp.com/https://stella-dev.demand-iq.com/api/solarcompanies/me/';
export const getSolarCompany = (appUrl2 = '') => {
  return get(SOLARCOMPANIES_URL, { ...header, 'APP-URL-2': appUrl2 });
};


/* Sample Code:

getSolarCompany('https://somedomain.com')
  .then(({ data }) => console.log(data))
  .catch(error => console.log(error));

*/