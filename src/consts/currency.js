export class CurrencyId {
  static USD = 'USD';
  static RUR = 'RUR';
}

export const currencyMap = {
  [CurrencyId.USD]: {
    sign: '$'
  },
  [CurrencyId.RUR]: {
    sign: '₽'
  }
};
