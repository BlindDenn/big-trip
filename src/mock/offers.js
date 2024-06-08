import { getSomeObjects } from '../utils.js';
import { TYPE } from '../const.js';

export const OFFER = [
  {
    'title': 'Add luggage',
    'price': 30
  },
  {
    'title': 'Switch to comfort class',
    'price': 100
  },
  {
    'title': 'Add meal',
    'price': 15
  },
  {
    'title': 'Choose seats',
    'price': 5
  },
  {
    'title': 'Travel by train',
    'price': 40
  },
  {
    'title': 'Upgrade to a business class',
    'price': 120
  },
  {
    'title': 'Order Uber',
    'price': 20
  },
  {
    'title': 'Rent a car',
    'price': 200
  },
  {
    'title': 'Add breakfast',
    'price': 50
  },
  {
    'title': 'Book tickets',
    'price': 40
  },
  {
    'title': 'Lunch in city',
    'price': 40
  },
];

const generateOffersByType = (item) => {
  const offers = getSomeObjects(OFFER);
  offers.forEach((element, i) => {
    element.id = i + 1;
  });
  return {
    'type': item.title,
    'offers': offers
  };
};

export const OFFERS_BY_TYPE = TYPE.map((item) => generateOffersByType(item));

// OFFERS_BY_TYPE[0].offers[0].id = 1;
// console.log(OFFERS_BY_TYPE[0].offers[0]);
