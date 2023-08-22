import axios from 'axios';
import {getToken} from '../utils/storage';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.19:3001/api/v1',
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
