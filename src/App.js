import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { storage } from './services/storage';
import { refreshToken } from './services/auth';
import { Storage } from './consts/storage';
import { Router } from './Router';
import './App.css';

window.addEventListener('load', () => {
  refreshToken();
});

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

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <Router />
      </div>
    </ApolloProvider>
  );
}

export default App;
