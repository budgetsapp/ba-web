import React from 'react';
import { useHistory } from 'react-router-dom';

import { SigninForm } from './SigninForm';
import { useAuth } from '../../../services/auth';
import { appPath } from '../../../services/app-path';

SigninFormContainer.propTypes = {};

export function SigninFormContainer() {
  const history = useHistory();
  const auth = useAuth();
  if (auth.getIsAuthenticated()) {
    history.push(appPath.dashboard());
  }

  async function login({ login, password }, setSubmitting) {
    try {
      await auth.login(login, password);
      history.push(appPath.dashboard());
    } catch (e) {
      console.log('Error', e);
    } finally {
      setSubmitting(false);
    }
  }

  return <SigninForm onSubmit={login} />;
}
