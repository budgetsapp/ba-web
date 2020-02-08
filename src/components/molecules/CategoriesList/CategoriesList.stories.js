import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import { CategoriesList } from './CategoriesList';
import { categories } from '../../../mocks/categories.mock';

export default {
  title: 'molecules/CategoriesList',
  component: CategoriesList,
  decorators: [withKnobs],
  includeStories: /.*Story$/
};

export const BaseStory = () => {
  const totalPages = number('totalPages', 10);
  const [activePage, setActivePage] = useState(1);
  return (
    <CategoriesList
      onAddClick={action('onAddClick')}
      onEditClick={action('onEditClick')}
      onRemoveClick={action('onRemoveClick')}
      onItemsRequest={activePage => {
        action('onItemsRequest')(activePage);
        setActivePage(activePage);
      }}
      items={categories}
      activePage={activePage}
      totalPages={totalPages}
    />
  );
};
