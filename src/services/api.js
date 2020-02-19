import 'dotenv/config';
const api = async (method = 'GET', path = '', payload) => {
  let route = `${process.env.REACT_APP_API_URL}/${path}`;
  let params = {
    method,
    body: JSON.stringify(payload),
    mode: 'cors',
    headers: { 'Cache-Control': 'no-cache','Content-Type': 'application/json' }
  };
  let response = await fetch(route, params);
  return await response;
}

export default api;