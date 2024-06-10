import { Anmts } from '@/__generated__/Anmts';
import { Auth } from '@/__generated__/Auth';
import { Health } from '@/__generated__/Health';
import { Notifications } from '@/__generated__/Notifications';
import { Postbg } from '@/__generated__/Postbg';
import { Posts } from '@/__generated__/Posts';
import { Stickers } from '@/__generated__/Stickers';
import { Users } from '@/__generated__/Users';
import { PROXY_API_PREFIX } from '@/constants/routes';

const anmts = new Anmts({
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

const postbg = new Postbg({
  baseURL: PROXY_API_PREFIX,
});

const posts = new Posts({
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
  auth,
  health,
  notifications,
  postbg,
  posts,
  stickers,
  users,
};

export { api };
