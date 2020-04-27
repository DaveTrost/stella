const request = (method, url, headers, body, credentials = 'same-origin') => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    credentials,
    body: body && JSON.stringify(body),
  })
    .then(res => {
      if(!res.ok) res.error = `Unable to fetch from ${url}`;
      return res;
    });
};

export const get = (url, headers, credentials) => request('GET', url, headers, null, credentials);
export const post = (url, headers, body, credentials) => request('POST', url, headers, body, credentials);
export const put = (url, headers, body, credentials) => request('PUT', url, headers, body, credentials);
export const patch = (url, headers, body, credentials) => request('PATCH', url, headers, body, credentials);
export const del = (url, headers, credentials) => request('DELETE', url, headers, null, credentials);
