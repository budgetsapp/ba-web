import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BaIdentityProvider } from 'ba-identity-react-hooks';

import { storage } from './services/storage';
import { Storage } from './consts/storage';
import { Router } from './Router';
import BaAuthApiClient from 'ba-auth-client-js';
import './App.css';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URL,
  request: operation => {
    const token = storage.getItem(Storage.ACCESS_TOKEN_KEY);
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  }
});

const authClient = new BaAuthApiClient({
  serverUrl: process.env.REACT_APP_IDENTITY_URL,
  storage: storage,
  refreshInterval_MS: 5 * 60 * 10000 // 5 min
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BaIdentityProvider client={authClient}>
        <div className='App'>
          <Router />
        </div>
      </BaIdentityProvider>
    </ApolloProvider>
  );
}

export default App;
