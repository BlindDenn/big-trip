import dayjs from 'dayjs';
import {
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
const shiftTime = 35;

export const generateEvent = () => ({
  basePrice: null,
  dateFrom: nowDate,
  dateTo: nowDate.add(shiftTime, 'minute'),
  destination: generateDestination(),
  id: null,
  isFavorite: getRandomBoolean(),
  offers: null,
  type: getRandomItem(TYPE),
});
