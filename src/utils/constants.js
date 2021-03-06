// const API_BASE_URL = `http://www.my-app-site.com/api`;
const API_BASE_URL = `http://localhost:5000/api`;

const makeAPICall = (
  endpoint,
  { body, ...customConfig } = {},
  method = 'GET'
) => {
  const token = localStorage.getItem('jwt');
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    console.log(`token`, token);
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  console.log(`body`, body);
  return fetch(`${API_BASE_URL}${endpoint}`, config).then(
    async (res) => {
      const data = await res.json();
      console.log(`data`, data);
      if (res.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    }
  );
};

export { API_BASE_URL, makeAPICall };
