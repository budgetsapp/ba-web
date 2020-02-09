import React from 'react';
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { SigninView } from './SigninView';

export default {
  title: 'views/SigninView',
  component: SigninView,
  includeStories: /.*Story$/
  // decorators: [withKnobs]
};

export const BaseStory = () => (
  <SigninView
    onSubmit={(values, setSubmitting) => {
      action('onSubmit')(values);
      setSubmitting(false);
    }}
  />
);
