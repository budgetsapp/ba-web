import React from 'react';

import './Signin.css';
import { SigninFormContainer } from '../../organisms/SigninForm/SigninFormContainer';

export function SigninView() {
  return (
    <div className='signin-view__main-container'>
      <div className='signin-view__content'>
        <SigninFormContainer />
      </div>
    </div>
  );
}
