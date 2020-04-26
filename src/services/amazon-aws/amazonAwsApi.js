import { post } from '../request';

const header = {
  'x-api-key': 'uVNr3uVcKHa620Gh0ND3Y5rk4L2sBBDE69a5ThCo',
};

const CALCULATE_URL = 'https://co99g5c344.execute-api.us-west-2.amazonaws.com/test/calculate/';
export const postCalculation = body => {
  return post(CALCULATE_URL, header, body);
};

/* Sample code:

postCalculation({
  "avg_bill": 200,
  "bill_offset": 1.0,
  "financing_rate": 0.0299,
  "financing_term": 30,
  "price_per_w": 3.0,
  "zipcode": "97214"
})
  .then(({ data }) => console.log(data))
  .catch(error => console.log(error));

  */