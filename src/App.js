import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { storage } from './services/storage';
import { Storage } from './consts/storage';
import { Router } from './Router';
import { useAuthClient, AuthProvider } from './services/auth';
import './App.css';

const client = new ApolloClient({
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

const URL = 'http://localhost:5011';

function App() {
  const authClient = useAuthClient(URL);
  window.addEventListener('load', () => {
    authClient.autoUpdateToken();
  });
  return (
    <ApolloProvider client={client}>
      <AuthProvider client={authClient}>
        <div className='App'>
          <Router />
        </div>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
