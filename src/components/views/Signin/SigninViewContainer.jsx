import React from 'react';
import BaAuthApiClient from 'ba-auth-api-client';

import { SigninView } from './SigninView';
import { storage } from '../../../services/storage';

SigninViewContainer.propTypes = {};

const URL = 'http://localhost:5011';
const client = new BaAuthApiClient(URL, {
  storage: storage
});

export function SigninViewContainer(params) {
  async function login({ login, password }, setSubmitting) {
    try {
      const res = await client.login(login, password);
      console.log(
        'access_token recieved',
        await storage.getItem('access_token')
      );
      console.log(JSON.stringify(res, null, 2));
    } catch (e) {
      console.log('Error', e);
    } finally {
      setSubmitting(false);
    }
  }

  return <SigninView onSubmit={login} />;
}
