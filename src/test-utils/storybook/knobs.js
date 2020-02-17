import { select } from '@storybook/addon-knobs';

import { currencyMap, CurrencyId } from '../../consts/currency';

export function getCurrencySelect() {
  const currencyIdOptions = {};
  Object.keys(currencyMap).forEach(currencyId => {
    currencyIdOptions[currencyId] = currencyId;
  });
  const currencyId = select('currencyId', currencyIdOptions, CurrencyId.RUR);
  return currencyId;
}
