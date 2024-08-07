import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';

import { Anmts } from '@/__generated__/Anmts';
import { Articles } from '@/__generated__/Articles';
import { Auth } from '@/__generated__/Auth';
import { Health } from '@/__generated__/Health';
import { Notifications } from '@/__generated__/Notifications';
import { Stickers } from '@/__generated__/Stickers';
import { Users } from '@/__generated__/Users';
import { PROXY_API_PREFIX } from '@/constants/routes';

const onRejected = async (error: AxiosError) => {
  if (error.response?.status !== 401) {
    return Promise.reject(error);
  }

  await auth.authControllerRefresh();

  return axios.request(error.config as InternalAxiosRequestConfig); // FIXME: type assertion
};

const anmts = new Anmts({
  baseURL: PROXY_API_PREFIX,
});

const articles = new Articles({
  baseURL: PROXY_API_PREFIX,
});

const auth = new Auth({
  baseURL: PROXY_API_PREFIX,
});

const health = new Health({
  baseURL: PROXY_API_PREFIX,
});

const notifications = new Notifications({
  baseURL: PROXY_API_PREFIX,
});

const stickers = new Stickers({
  baseURL: PROXY_API_PREFIX,
});

const users = new Users({
  baseURL: PROXY_API_PREFIX,
});

const api = {
  anmts,
  articles,
  auth,
  health,
  notifications,
  stickers,
  users,
};

// auth.instance.interceptors.response.use((value) => value, onRejected);
anmts.instance.interceptors.response.use((value) => value, onRejected);
articles.instance.interceptors.response.use((value) => value, onRejected);
health.instance.interceptors.response.use((value) => value, onRejected);
notifications.instance.interceptors.response.use((value) => value, onRejected);
stickers.instance.interceptors.response.use((value) => value, onRejected);
users.instance.interceptors.response.use((value) => value, onRejected);

export { api };
