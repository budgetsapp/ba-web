import React from 'react';
import { action } from '@storybook/addon-actions';

import { NoItems } from './NoItems';

export default {
  title: 'molecules/NoItems',
  component: NoItems,
  includeStories: /.*Story$/
};

export const BaseStory = () => <NoItems onAddClick={action('onAddClick')} />;
