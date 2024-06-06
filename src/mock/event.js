import dayjs from 'dayjs';
import {
  getRandomInteger,
  getRandomBoolean,
  getRandomItem
} from '../utils.js';
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

const nowDate = dayjs();

export const generateEvent = () => ({
  basePrice: getRandomInteger(25, 899),
  dateFrom: nowDate,
  dateTo: nowDate.add(getRandomInteger(15, 120), 'minute'),
  destination: generateDestination(),
  id: null,
  isFavorite: getRandomBoolean(),
  offers: null,
  type: getRandomItem(TYPE),
});
