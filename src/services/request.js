import axios from 'axios';

const request = async (method, url, headers, data) => {
  const res = await axios({
    method,
    url,
    headers,
    data
  });
  return res;
};

export const post = (url, headers = {}, body) => request('POST', url, headers, body);
export const get = (url, headers = {}) => request('GET', url, headers);
export const put = (url, headers = {}, body) => request('PUT', url, headers, body);
export const patch = (url, headers = {}, body) => request('PATCH', url, headers, body);
export const del = (url, headers = {}) => request('DELETE', url, headers);
