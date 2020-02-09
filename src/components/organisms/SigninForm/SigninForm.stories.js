import React from 'react';
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { SigninForm } from './SigninForm';

export default {
  title: 'organisms/SigninForm',
  component: SigninForm,
  includeStories: /.*Story$/
  // decorators: [withKnobs]
};

export const BaseStory = () => (
  <SigninForm
    onSubmit={(values, setSubmitting) => {
      action('onSubmit')(values);
      setSubmitting(false);
    }}
  />
);
