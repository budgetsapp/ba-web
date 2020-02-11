import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { storage } from './services/storage';
import { Storage } from './consts/storage';
import { Router } from './Router';
import BaAuthApiClient from 'ba-auth-api-client';
import { BaAuthApiProvider } from './services/auth';
import './App.css';

const apolloClient = new ApolloClient({
  uri: 'http://127.0.0.1:5010/graphql',
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
  serverUrl: 'http://localhost:5011',
  storage: storage,
  refreshInterval_MS: 5 * 60 * 10000 // 5 min
});

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BaAuthApiProvider client={authClient}>
        <div className='App'>
          <Router />
        </div>
      </BaAuthApiProvider>
    </ApolloProvider>
  );
}

export default App;
