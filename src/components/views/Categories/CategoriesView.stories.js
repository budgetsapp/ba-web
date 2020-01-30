import React from 'react';

import { CategoriesView } from './CategoriesView';

export default {
  title: 'views/CategoriesView',
  component: CategoriesView,
  includeStories: /.*Story$/
};

export const BaseStory = () => <CategoriesView />;
