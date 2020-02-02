export function queryCategories(categories, query) {
  return categories
    .filter(
      c => query && c.display_name.toLowerCase().includes(query.toLowerCase())
    )
    .map(c => ({
      key: c.id,
      value: c.id,
      text: c.display_name
    }));
}

export const category = {
  id: '1',
  displayName: 'taxi'
};

export const categories = [
  {
    id: '1',
    display_name: 'taxi'
  },
  {
    id: '2',
    display_name: 'cafe'
  },
  {
    id: '3',
    display_name: 'bus'
  },
  {
    id: '4',
    display_name: 'fastfood'
  },
  {
    id: '5',
    display_name: 'Swimming Pool'
  },
  {
    id: '6',
    display_name: 'Internet'
  },
  {
    id: '7',
    display_name: 'Phone'
  },
  {
    id: '8',
    display_name: 'TV'
  },
  {
    id: '9',
    display_name: 'Others'
  },

  {
    id: '10',
    display_name: 'Flowers'
  },
  {
    id: '11',
    display_name: 'Presents'
  },

  {
    id: '12',
    display_name: 'Books'
  },
  {
    id: '13',
    display_name: 'Cinema'
  },
  {
    id: '14',
    display_name: 'Theatre'
  },
  {
    id: '15',
    display_name: 'Autoservice'
  }
];
