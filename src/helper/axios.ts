import axios from 'axios';
import {getToken} from '../utils/storage';
import {BASE_URL_API} from '../constants';

const axiosInstance = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
axiosInstance.interceptors.request.use(
  async config => {
    const token = await getToken();
    if (config.headers) {
      config.headers.set(
        'Authorization',
        `Bearer 
       ${token}`,
      );
    }
    return config;
  },
  error => Promise.reject(error),
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error instanceof AxiosError && error.response?.status === 401) {
//       useAuthStore.setState({ signedInAs: undefined });
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
