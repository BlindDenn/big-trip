import { getSomeObjects } from '../utils.js';
import { TYPE } from '../const.js';

export const OFFER = [
  {
    'name': 'luggage',
    'title': 'Add luggage',
    'price': 30
  },
  {
    'name': 'comfort',
    'title': 'Switch to comfort class',
    'price': 100
  },
  {
    'name': 'meal',
    'title': 'Add meal',
    'price': 15
  },
  {
    'name': 'seats',
    'title': 'Choose seats',
    'price': 5
  },
  {
    'name': 'train',
    'title': 'Travel by train',
    'price': 40
  },
  {
    'name': 'business',
    'title': 'Upgrade to a business class',
    'price': 120
  },
  {
    'name': 'uber',
    'title': 'Order Uber',
    'price': 20
  },
  {
    'name': 'car',
    'title': 'Rent a car',
    'price': 200
  },
  {
    'name': 'breakfast',
    'title': 'Add breakfast',
    'price': 50
  },
  {
    'name': 'tickets',
    'title': 'Book tickets',
    'price': 40
  },
  {
    'name': 'lunch',
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
