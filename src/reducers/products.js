const initialState = [
  {
    title: "water",
    price: 7,
    image: "https://5.imimg.com/data5/TE/DM/MY-44148833/1-liter-mineral-water-bottles-500x500.jpg",
    description: "water is always the best drink",
    id: 1,
  },
  {
    title: "milk",
    price: 15,
    image: "https://media.istockphoto.com/vectors/transparent-glass-bottle-of-milk-with-a-label-vector-id637619702",
    description: "good for bones and strength so needed in our life",
    id: 2,
  },
  {
    title: "packet of nuts",
    price: 17,
    image: "https://image.shutterstock.com/image-photo/swindon-uk-october-1-2017-260nw-734804263.jpg",
    description: "men's health needs to be reinforced with this not overrated product",
    id: 3,
  },
  {
    title: "honey",
    price: 12,
    image: "https://st2.depositphotos.com/3687485/9315/v/600/depositphotos_93151782-stock-illustration-honey-bank-vector-illustrations.jpg",
    description: "spring honey collected by bees from chamomile and linden",
    id: 4,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default products;