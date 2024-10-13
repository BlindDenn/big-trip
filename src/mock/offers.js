import { getSomeItems } from '../utils.js';
import { TYPE } from '../const.js';
import {getRandomInteger} from '../utils.js';


const generateId = () => {
  let i = 0;
  return () => ++i;
};

const generateRandomPrice = () => getRandomInteger(1, 20) * 10;

const generateOfferId = generateId();

class Offer {
  constructor(title) {
    this.id = generateOfferId();
    this.title = title;
    this.price = generateRandomPrice();
  }
}

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

const OFFERS = OFFER_TITLES.map((element) => new Offer(element));

const generateOffersByType = (item) => {
  const offers = getSomeItems(OFFERS);
  return {
    'type': item.title,
    'offers': offers
  };
};

export const OFFERS_BY_TYPE = TYPE.map((item) => generateOffersByType(item));
