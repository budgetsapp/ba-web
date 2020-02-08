import { storage } from '../services/storage';
import { Storage } from '../consts/storage';

export function getIsAuthenticated() {
  // TODO: check expiration
  return !!storage.getItem(Storage.ACCESS_TOKEN_KEY);
}

export function logout() {
  storage.removeItem(Storage.ACCESS_TOKEN_KEY);
  storage.removeItem(Storage.REFRESH_TOKEN_KEY);
}
