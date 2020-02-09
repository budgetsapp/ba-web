import React from 'react';
import BaAuthApiClient from 'ba-auth-api-client';
import { useHistory } from 'react-router-dom';

import { SigninForm } from './SigninForm';
import { storage } from '../../../services/storage';
import { getIsAuthenticated } from '../../../services/auth';
import { appPath } from '../../../services/app-path';
import { Storage } from '../../../consts/storage';

SigninFormContainer.propTypes = {};

const URL = 'http://localhost:5011';
const client = new BaAuthApiClient(URL, {
  storage: storage
});

export function SigninFormContainer() {
  const history = useHistory();
  if (getIsAuthenticated()) {
    history.push(appPath.dashboard());
  }

  async function login({ login, password }, setSubmitting) {
    try {
      const res = await client.login(login, password);
      console.log(
        'access_token recieved',
        storage.getItem(Storage.ACCESS_TOKEN_KEY)
      );
      console.log(JSON.stringify(res, null, 2));
      history.push(appPath.dashboard());
    } catch (e) {
      console.log('Error', e);
    } finally {
      setSubmitting(false);
    }
  }

  return <SigninForm onSubmit={login} />;
}
