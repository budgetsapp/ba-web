import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getError } from '../../../services/form';
import './CategoryForm.css';

CategoryForm.propTypes = {
  item: PropTypes.object.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  title: PropTypes.string
};

CategoryForm.defaultProps = {
  title: ''
};

const formSchema = Yup.object().shape({
  displayName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

export function CategoryForm({ onSaveClick, item, title }) {
  return (
    <Formik
      initialValues={{
        displayName: item.displayName
      }}
      validationSchema={formSchema}
      onSubmit={(values, { setSubmitting }) =>
        onSaveClick(values, setSubmitting)
      }
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
          <Form>
            <h3>{title}</h3>
            <Form.Input
              error={getError(errors, touched, 'displayName')}
              fluid
              label='Name'
              placeholder='Name'
              size='mini'
              value={values.displayName}
              onChange={handleChange('displayName')}
              onBlur={handleBlur('displayName')}
            />
            <Button
              color='grey'
              fluid
              type='submit'
              size='small'
              disabled={!isValid || isSubmitting}
              onClick={() => {
                handleSubmit();
              }}
            >
              Save
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
