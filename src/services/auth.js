import { storage } from '../services/storage';
import { Storage } from '../consts/storage';

export function getIsAuthenticated() {
  return !!storage.getItem(Storage.ACCESS_TOKEN_KEY);
}
