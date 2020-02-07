import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getError } from '../../../services/form';
import './CategoryForm.css';

CategoryForm.propTypes = {
  item: PropTypes.object,
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  pageTitle: PropTypes.string,
  pageSubtitle: PropTypes.string,
  submitButtonTitle: PropTypes.string
};

CategoryForm.defaultProps = {
  pageTitle: '',
  pageSubtitle: '',
  submitButtonTitle: 'Save',
  item: {}
};

const formSchema = Yup.object().shape({
  displayName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

export function CategoryForm({
  onSaveClick,
  onCancelClick,
  item,
  pageTitle,
  pageSubtitle,
  submitButtonTitle
}) {
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
            <h3>{pageTitle}</h3>
            <span>{pageSubtitle}</span>
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
            <div className='category-form__buttons-container'>
              <Button
                secondary
                fluid
                type='submit'
                size='small'
                disabled={isSubmitting}
                onClick={() => {
                  onCancelClick();
                }}
              >
                Cancel
              </Button>
              <Button
                fluid
                primary
                type='submit'
                size='small'
                disabled={!isValid || isSubmitting}
                onClick={() => {
                  handleSubmit();
                }}
              >
                {submitButtonTitle}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
