import Api from '../services/api';
import { setAuthenticated, logout } from '../services/auth';

export async function login(email, password) {
  const { data } = await Api.post('/sessions', { email, password });
  const { token, user } = data;

  setAuthenticated(token, user);
}

export const loginWithToken = async (token) => {
  await Api.post('/session/me', { token });
};
