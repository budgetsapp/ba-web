export const pieChartData = [
  { name: 'taxi', value: 2000 },
  { name: 'bus', value: 1000 },
  { name: 'cafe', value: 12500 },
  { name: 'phone', value: 500 },
  { name: 'internet', value: 500 },
  { name: 'metro', value: 900 },
  { name: 'swimming pool', value: 900 }
];

export function getTotal(data) {
  return data.reduce((acc, current) => acc + current.value, 0);
}
