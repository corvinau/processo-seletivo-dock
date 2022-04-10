import qs from 'query-string';
import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';

const api = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    xsrfHeaderName: 'X-CSRFToken',
    xsrfCookieName: 'csrftoken',
    withCredentials: true,
    paramsSerializer: params => {
      return qs.stringify(params, {
        arrayFormat: 'none',
        skipEmptyString: true,
      });
    },
  }),
  {
    ignoreHeaders: true,
  },
);

export const { isAxiosError } = axios;
export default api;