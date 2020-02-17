import { currencyMap } from '../consts/currency';

export function formatWithCurrency(value, currencyId) {
  const currency = currencyMap[currencyId];
  const sign = currency ? currency.sign : '';
  return value + (sign ? ` ${sign}` : '');
}
