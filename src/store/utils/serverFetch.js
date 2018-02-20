const serverFetch = (endpoint, method, body) => {
  const apiURL = 'http://localhost:5000';
  return fetch(`${apiURL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (response.status >= 400) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
};

export default serverFetch;
