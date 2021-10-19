const initialState = [
  { id: 12, title: 'gold' },
  { id: 14, title: 'silver' },
  { id: 17, title: 'jewels' },
  { id: 134, title: 'maps' },
  { id: 144, title: 'fruits' },
  { id: 99, title: 'wine' },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default products;