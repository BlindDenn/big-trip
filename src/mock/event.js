import dayjs from 'dayjs';
import {TYPE} from '../const.js';
import {
  getRandomInteger,
  getRandomBoolean,
  getRandomItem,
  getSomeItems
} from '../utils.js';
import { generateDestination } from './destination.js';
import { OFFERS_BY_TYPE } from './offers.js';

const generateDate = () => dayjs().toDate();
const getOffersIdByType = (type) => OFFERS_BY_TYPE.find((element) => element.type === type.title);

export const generateEvent = () => {
  const type = getRandomItem(TYPE);
  const dateFrom = generateDate();
  const offersFullList = getOffersIdByType(type).offers;
  const selectedOffers = getSomeItems(offersFullList);
  const offers = selectedOffers.map((element) => element.id);

  return {
    basePrice: getRandomInteger(2, 40) * 10,
    dateFrom: dateFrom,
    dateTo: dayjs(dateFrom).add(getRandomInteger(1, 24) * 5, 'minute').toDate(),
    destination: generateDestination(),
    id: null,
    isFavorite: getRandomBoolean(),
    offers: offers,
    type: type,
  };
};
