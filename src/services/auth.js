import React from 'react';
import { createContext, useState, useContext } from 'react';
import BaAuthApiClient from 'ba-auth-api-client';

import { storage } from '../services/storage';
import { Storage } from '../consts/storage';

const AuthClientContext = createContext();

export function AuthProvider({ client, children }) {
  return (
    <AuthClientContext.Provider value={client}>
      {children}
    </AuthClientContext.Provider>
  );
}

export function useAuthClient(url) {
  function _buildUser(data) {
    return {
      displayName: data ? data.display_name : ''
    };
  }

  function _buildEmptyUser() {
    return {
      displayName: ''
    };
  }

  const [user, setUser] = useState(_buildEmptyUser());
  const client = new BaAuthApiClient(url, {
    storage: storage,
    refreshInterval_MS: 5000, // 5 * 60 * 10000, // 5 min
    tokensUpdatedCallback: ({ data }) => {
      setUser(_buildUser(data));
    }
  });

  function logout() {
    client.logout();
  }

  async function login(login, password) {
    return await client.login(login, password);
  }

  function autoUpdateToken() {
    client.autoUpdateToken();
  }

  function getIsRefreshTokenExpired() {
    const refreshToken = storage.getItem(Storage.REFRESH_TOKEN_KEY);
    const isExpired = client.isRefreshTokenExpired(refreshToken);
    return isExpired;
  }

  function getIsAuthenticated() {
    return !getIsRefreshTokenExpired();
  }

  return {
    user,
    login,
    logout,
    autoUpdateToken,
    getIsRefreshTokenExpired,
    getIsAuthenticated
  };
}

export function useAuth() {
  return useContext(AuthClientContext);
}
