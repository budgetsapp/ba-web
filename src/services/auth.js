import React, { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';

const AuthClientContext = createContext();

export function BaAuthApiProvider({ client, children }) {
  function _buildUser(displayName) {
    return {
      displayName
    };
  }
  function _buildCurrentUser(data) {
    return _buildUser(data ? data.display_name : '');
  }
  function _buildEmptyUser() {
    return _buildUser('User');
  }

  const [user, setUser] = useState(_buildEmptyUser());
  const [refreshToken, setRefreshToken] = useState(undefined); // undefined means that value is not set yet
  const [isRefreshTokenExpired, setIsRefreshTokenExpired] = useState(undefined);
  useEffect(() => {
    if (refreshToken) {
      const isExpired = client.isRefreshTokenExpired(refreshToken);
      setIsRefreshTokenExpired(isExpired);
    }
  }, [client, refreshToken]);

  client.setTokensUpdatedCallback(({ refreshToken, accessToken, data }) => {
    setRefreshToken(refreshToken);
    const currentUser = accessToken
      ? _buildCurrentUser(data)
      : _buildEmptyUser();
    setUser(currentUser);
  });

  useEffect(() => {
    client.autoUpdateToken(true);
  }, []);

  const value = {
    user,
    login: async function(login, password) {
      await client.login(login, password);
      client.autoUpdateToken();
    },
    logout: function() {
      client.logout();
    },
    autoUpdateToken: function() {
      client.autoUpdateToken();
    },
    /**
     * Intended to allow open an app if there is a refresh token
     * Can be used for offline mode
     */
    getIsRefreshTokenExpired: function() {
      return (
        refreshToken !== undefined &&
        (refreshToken === null || isRefreshTokenExpired)
      );
    },
    getIsAuthenticated: function() {
      return refreshToken !== null && refreshToken !== undefined;
    }
  };

  return (
    <AuthClientContext.Provider value={value}>
      {children}
    </AuthClientContext.Provider>
  );
}

export function useAuth() {
  const {
    login,
    logout,
    autoUpdateToken,
    getIsAuthenticated,
    getIsRefreshTokenExpired
  } = useContext(AuthClientContext);
  return {
    login,
    logout,
    autoUpdateToken,
    getIsRefreshTokenExpired,
    getIsAuthenticated
  };
}

export function useCurrentUser() {
  const { user } = useContext(AuthClientContext);
  return user;
}
