import axiosInstance from '../axios';

export const loginApi = async (data: any) => {
  try {
    const res = await axiosInstance.post('/login', data);
    return res;
  } catch (error) {
    return false;
  }
};
