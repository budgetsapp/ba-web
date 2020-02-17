import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { getError } from '../../../services/form';
import { currencyMap } from '../../../consts/currency';
import './ExpenseForm.css';

ExpenseForm.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  pageTitle: PropTypes.string,
  submitButtonTitle: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired,
  onCategoryQueryChange: PropTypes.func.isRequired,
  currencyId: PropTypes.string.isRequired
};

ExpenseForm.defaultProps = {
  pageTitle: '',
  submitButtonTitle: 'Save'
};

const formSchema = Yup.object().shape({
  category: Yup.string().required('Required'),
  amount: Yup.number().required('Required'),
  description: Yup.string().max(100, 'Too Long!')
});

export function ExpenseForm({
  onSaveClick,
  onCancelClick,
  pageTitle,
  submitButtonTitle,
  categories,
  onCategoryQueryChange,
  currencyId
}) {
  const [query, setQuery] = useState('');
  return (
    <Formik
      initialValues={{}}
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
            <Form.Select
              error={getError(errors, touched, 'category')}
              fluid
              clearable
              onChange={(e, { value, options }) => {
                const selectedCategory = options.filter(
                  opt => opt.value === value
                )[0];
                setQuery(selectedCategory ? selectedCategory.text : '');
                handleChange('category')(value);
              }}
              onSearchChange={(e, { searchQuery }) => {
                setQuery(searchQuery);
                onCategoryQueryChange(searchQuery);
              }}
              options={categories}
              placeholder='Category'
              search
              searchQuery={query}
              selection
              value={values.category}
            />

            <Form.Input
              error={getError(errors, touched, 'amount')}
              fluid
              label={`Amount, ${currencyMap[currencyId].sign}`}
              placeholder='Amount'
              size='mini'
              value={values.amount}
              onChange={handleChange('amount')}
              onBlur={handleBlur('amount')}
            />
            <Form.TextArea
              error={getError(errors, touched, 'description')}
              label='Description'
              placeholder='Description'
              value={values.description}
              onChange={handleChange('description')}
              onBlur={handleBlur('description')}
            />
            <div className='expense-form__buttons-container'>
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
