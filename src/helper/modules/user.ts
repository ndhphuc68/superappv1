import axiosInstance from '../axios';

export const getInfoApi = async (username: string) => {
  try {
    const res = await axiosInstance.get(`/user/info?username=${username}`);
    return res.data;
  } catch (error) {
    return false;
  }
};
