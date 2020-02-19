import React from 'react';
import { useHistory } from 'react-router-dom';
import { useIdentity } from 'ba-identity-react-hooks';

import { SigninForm } from './SigninForm';
import { appPath } from '../../../services/app-path';

SigninFormContainer.propTypes = {};

export function SigninFormContainer() {
  const history = useHistory();
  const identity = useIdentity();
  if (identity.getIsAuthenticated()) {
    history.push(appPath.dashboard());
  }

  async function login({ login, password }, setSubmitting) {
    try {
      await identity.login(login, password);
      history.push(appPath.dashboard());
    } catch (e) {
      console.log('Error', e);
    } finally {
      setSubmitting(false);
    }
  }

  return <SigninForm onSubmit={login} />;
}
