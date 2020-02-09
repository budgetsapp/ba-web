import React from 'react';

import { DashboardView } from './DashboardView';

export default {
  title: 'views/DashboardView',
  component: DashboardView,
  includeStories: /.*Story$/
};

export const BaseStory = () => <DashboardView />;
