const request = (method, url, headers, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    credentials: 'include',
    body: body && JSON.stringify(body),
  })
    .then(res => {
      if(!res.ok) res.error = `Unable to fetch from ${url}`;
      return res;
    });
};

export const post = (url, headers = {}, body) => request('POST', url, headers, body);
export const get = (url, headers = {}) => request('GET', url, headers);
export const put = (url, headers = {}, body) => request('PUT', url, headers, body);
export const patch = (url, headers = {}, body) => request('PATCH', url, headers, body);
export const del = (url, headers = {}) => request('DELETE', url, headers);
