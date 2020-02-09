import React from 'react';
import { useHistory } from 'react-router-dom';

import { SigninForm } from './SigninForm';
import { storage } from '../../../services/storage';
import { getIsAuthenticated, login as authLogin } from '../../../services/auth';
import { appPath } from '../../../services/app-path';
import { Storage } from '../../../consts/storage';

SigninFormContainer.propTypes = {};

export function SigninFormContainer() {
  const history = useHistory();
  if (getIsAuthenticated()) {
    history.push(appPath.dashboard());
  }

  async function login({ login, password }, setSubmitting) {
    try {
      const res = await authLogin(login, password);
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
