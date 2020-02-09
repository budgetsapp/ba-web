import { storage } from '../services/storage';
import { Storage } from '../consts/storage';
import { decode } from '../services/token';

export function buildUser(id, roles, displayName, login) {
  return {
    id: id,
    roles: roles,
    displayName: displayName,
    login: login
  };
}

export function buildEmptyUser() {
  return buildUser('', [], '', '');
}

export function useCurrentUser() {
  const token = storage.getItem(Storage.ACCESS_TOKEN_KEY);
  if (token) {
    const decoded = JSON.parse(decode(token));
    return buildUser(
      decoded.user_claims.id,
      decoded.user_claims.roles,
      decoded.user_claims.display_name,
      decoded.identity
    );
  }
  return buildEmptyUser();
}
