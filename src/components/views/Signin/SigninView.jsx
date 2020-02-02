import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getError } from '../../../services/form';

import './Signin.css';

const DEFAULT_LOGIN = 'ba-user-1';
const DEFAULT_PASSWORD = 'ba-password';

SigninView.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

SigninView.defaultProps = {};

const formSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

export function SigninView({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        login: DEFAULT_LOGIN,
        password: DEFAULT_PASSWORD
      }}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) => onSubmit(values, setSubmitting)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
        isValid
      }) => {
        return (
          <div className='signin-view__main-container'>
            <div className='signin-view__content'>
              <Form className='signin-view__form'>
                <Form.Input
                  error={getError(errors, touched, 'login')}
                  fluid
                  label='Login'
                  placeholder='Login'
                  value={values.login}
                  onChange={handleChange('login')}
                  onBlur={handleBlur('login')}
                />
                <Form.Input
                  error={getError(errors, touched, 'password')}
                  fluid
                  label='Password'
                  placeholder='Password'
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <Button
                  color='grey'
                  fluid
                  type='submit'
                  size='large'
                  disabled={!isValid || isSubmitting}
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
