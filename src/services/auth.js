import BaAuthApiClient from 'ba-auth-api-client';

import { storage } from '../services/storage';
import { Storage } from '../consts/storage';

const URL = 'http://localhost:5011';
const client = new BaAuthApiClient(URL, {
  storage: storage,
  refreshInterval_MS: 5 * 60 * 10000 // 5 min
});

export function getIsAuthenticated() {
  return !isRefreshTokenExpired();
}

export function logout() {
  client.logout();
}

export async function login(login, password) {
  return await client.login(login, password);
}

export function refreshToken() {
  client.autoUpdateToken();
}

function getRefreshToken() {
  return storage.getItem(Storage.REFRESH_TOKEN_KEY);
}

export function isRefreshTokenExpired() {
  const refreshToken = getRefreshToken();
  const isExpired = client.isRefreshTokenExpired(refreshToken);
  return isExpired;
}
