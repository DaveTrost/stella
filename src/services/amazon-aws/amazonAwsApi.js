import { post } from '../request';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const header = {
  'x-api-key': 'uVNr3uVcKHa620Gh0ND3Y5rk4L2sBBDE69a5ThCo',
};

const CALCULATE_URL = `${PROXY_URL}https://co99g5c344.execute-api.us-west-2.amazonaws.com/test/calculate/`;
export const postCalculation = body => {
  return post(CALCULATE_URL, header, body);
};
