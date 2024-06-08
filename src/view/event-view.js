import { OFFERS_BY_TYPE } from '../mock/offers.js';
import {createElement} from '../render.js';
import {
  humanizeEventDate,
  humanizeEventTime,
  diffTimes
} from '../utils.js';

const createEventTemplate = (event) => {

  const {type, destination, dateFrom, dateTo, basePrice, isFavorite, offers} = event;

  const date = humanizeEventDate(dateFrom);
  const typeIconName = type.name;
  const typeName = type.title;
  const destinationName = destination.name;
  const startTime = humanizeEventTime(dateFrom);
  const endTime = humanizeEventTime(dateTo);
  const duration = diffTimes(dateFrom, dateTo);
  const eventPrice = basePrice;
  const favoriteClassName = isFavorite? 'event__favorite-btn--active' : '';
  const offersData = OFFERS_BY_TYPE.find((item) => item.type === type.title).offers;
  const selectedOffersData = offers.map((offer) => offersData.find((item) => item.id === offer));

  const selectedOffer = (offer) =>
    `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`;

  const offersList = selectedOffersData.map((offer) => selectedOffer(offer)).join('');

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateFrom}">${date}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${typeIconName}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${typeName} ${destinationName}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom}">${startTime}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo}">${endTime}</time>
          </p>
          <p class="event__duration">${duration}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${eventPrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">
            ${offersList}
          </ul>
        <button class="event__favorite-btn ${favoriteClassName}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class EventView {
  constructor(event) {
    this.event = event;
  }

  getTemplate() {
    return createEventTemplate(this.event);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
