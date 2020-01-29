import React from 'react';
import { Form } from 'semantic-ui-react';

import './Signin.css';

SigninView.propTypes = {};
SigninView.defaultProps = {};

export function SigninView({}) {
  return (
    <div className='signin-view__main-container'>
      <div className='signin-view__content'>
        <Form>
          <Form.Input
            error={{
              content: 'Please enter your first name',
              pointing: 'below'
            }}
            fluid
            label='First name'
            placeholder='First name'
            id='form-input-first-name'
          />
          <Form.Input
            error='Please enter your last name'
            fluid
            label='Last name'
            placeholder='Last name'
          />
          <Form.Checkbox
            label='I agree to the Terms and Conditions'
            error={{
              content: 'You must agree to the terms and conditions',
              pointing: 'left'
            }}
          />
        </Form>
      </div>
    </div>
  );
}
