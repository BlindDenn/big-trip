import { getSomeItems } from '../utils.js';
import { TYPES } from '../const.js';
import {getRandomInteger} from '../utils.js';


const generateId = () => {
  let i = 0;
  return () => ++i;
};

const generateRandomPrice = () => getRandomInteger(1, 20) * 10;

class Offer {
  constructor(title, id) {
    this.id = id;
    this.title = title;
    this.price = generateRandomPrice();
  }
}

// export const OFFER = [
//   {
//     'name': 'luggage',
//     'title': 'Add luggage',
//     'price': 30
//   },
//   {
//     'name': 'comfort',
//     'title': 'Switch to comfort class',
//     'price': 100
//   },
//   {
//     'name': 'meal',
//     'title': 'Add meal',
//     'price': 15
//   },
//   {
//     'name': 'seats',
//     'title': 'Choose seats',
//     'price': 5
//   },
//   {
//     'name': 'train',
//     'title': 'Travel by train',
//     'price': 40
//   },
//   {
//     'name': 'business',
//     'title': 'Upgrade to a business class',
//     'price': 120
//   },
//   {
//     'name': 'uber',
//     'title': 'Order Uber',
//     'price': 20
//   },
//   {
//     'name': 'car',
//     'title': 'Rent a car',
//     'price': 200
//   },
//   {
//     'name': 'breakfast',
//     'title': 'Add breakfast',
//     'price': 50
//   },
//   {
//     'name': 'tickets',
//     'title': 'Book tickets',
//     'price': 40
//   },
//   {
//     'name': 'lunch',
//     'title': 'Lunch in city',
//     'price': 40
//   },
// ];

export const OFFER_TITLES = [
  'Add luggage',
  'Switch to comfort class',
  'Add meal',
  'Choose seats',
  'Travel by train',
  'Upgrade to a business class',
  'Order Uber',
  'Rent a car',
  'Add breakfast',
  'Book tickets',
  'Lunch in city'
];

export const OFFERS_BY_TYPE = TYPES.map((type) => {
  const generateOfferId = generateId();
  return {
    'type': type,
    'offers': getSomeItems(OFFER_TITLES).map((title) => new Offer(title, generateOfferId()))
  };
});

