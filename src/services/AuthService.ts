import axios from 'axios';
import store from '@/store';

export const authClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (
      error.response &&
      [401, 419].includes(error.response.status) &&
      store.getters['auth/authUser'] &&
      !store.getters['auth/guest']
    ) {
      console.log('this is error man');
      console.log(error);
      store.dispatch('auth/logout');
    }
    return Promise.reject(error);
  },
);

export default {
  async login(payload: any) {
    await authClient.get('/sanctum/csrf-cookie');
    return await authClient.post('/login', payload);
  },
  async register(payload: any) {
    await authClient.get('/sanctum/csrf-cookie');
    return authClient.post('/api/stores', payload);
  },
  logout() {
    return authClient.post('/logout');
  },
  async getAuthUser() {
    const { data } = await authClient.get('/api/user');
    return data;
  },
};
