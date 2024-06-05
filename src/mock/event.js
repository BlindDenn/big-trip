import {
  getRandomBoolean,
  getRandomItem
} from './utils.js';
import { generateDestination } from './destination.js';

const TYPE = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Drive',
  'Flight',
  'Check-in',
  'Sightseeing',
  'Restaurant'
];

export const generateEvent = () => ({
  basePrice: null,
  dateFrom: null,
  dateTo: null,
  destination: generateDestination(),
  id: null,
  isFavorite: getRandomBoolean(),
  offers: null,
  type: getRandomItem(TYPE),
});
