import {createElement} from '../render.js';
import { TYPE } from '../const.js';
import { OFFERS_BY_TYPE } from '../mock/offers.js';
import { humanizeEventTimeFull } from '../utils.js';

const createEventEditTemplate = (event = {}, destinations) => {
  const {
    basePrice = null,
    dateFrom = null,
    dateTo = null,
    destination = {'name': null, 'pictures': []},
    // id = null,
    // isFavorite = false,
    offers = [],
    type = {'title': null, 'name': null}
  } = event;

  const destinationNames = destinations.map((item) => item.name);

  const types = [...TYPE];
  const destinationName = destination.name || 'Choose destination';
  const typeName = type.title || '&larr; Select';
  const typeIconName = type.title.toLowerCase() || 'taxi';
  const offersByType = (OFFERS_BY_TYPE.find((offer) => offer.type === type.title) || {}).offers;

  const typeItem = (item) => {
    const checked = item.name === type.title.toLowerCase() ? 'checked' : '';

    return `<div class="event__type-item">
      <input id="event-type-${item.name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.name}" ${checked}>
      <label class="event__type-label  event__type-label--${item.name}" for="event-type-taxi-1">${item.title}</label>
    </div>`;
  };
  const typeItems = types.map((item) => typeItem(item)).join('');

  const destinationListOption = (name) => `<option value="${name}"></option>`;
  const destinationListOptions = destinationNames.map((name) => destinationListOption(name)).join('');

  const startTime = humanizeEventTimeFull(dateFrom);
  const endTime = humanizeEventTimeFull(dateTo);

  const eventPrice = basePrice;

  const isOffersAvaliable = Boolean(offersByType.length);

  const offerSelector = (offer) => {
    const offerId = offer.id;
    const offerTitle = offer.title;
    const offerPrice = offer.price;
    const checked = offers.includes(offer.id)? 'checked' : '';

    return `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-id-${offerId}" type="checkbox" name="event-offer-id-${offerId}" ${checked}>
      <label class="event__offer-label" for="event-offer-id-${offerId}">
        <span class="event__offer-title">${offerTitle}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offerPrice}</span>
      </label>
    </div>`;
  };
  const offerSelectors = (offersByType || []).map((offer) => offerSelector(offer)).join('');

  const destinationDescription = destination.description;
  const destinationPictures = (destination.pictures || []).map((picture) => picture.src);
  const destinationBlockDescription = destination.description?
    `<p class="event__destination-description">${destinationDescription}</p>` : '';
  const destinationBlockPicture = (picture) => `<img class="event__photo" src="${picture}" alt="Event photo">`;
  const destinationBlockPictures = destinationPictures.length?
    `<div class="event__photos-container">
      <div class="event__photos-tape">
        ${destinationPictures.map((picture) => destinationBlockPicture(picture)).join('')}
      </div>
    </div>` : '';
  const destinationBlock = destination.description || destination.pictures.length? `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    ${destinationBlockDescription}
    ${destinationBlockPictures}
  </section>` : '';

  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${typeIconName}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              ${typeItems}

            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${typeName}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destinationName}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${destinationListOptions}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTime}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTime}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${eventPrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          ${isOffersAvaliable ? '<h3 class="event__section-title  event__section-title--offers">Offers</h3>' : ''}

          <div class="event__available-offers">

            ${offerSelectors}

          </div>
        </section>

        ${destinationBlock}
      </section>
    </form>
  </li>`;
};

export default class EventEditView {
  #event;
  #destinations;
  #element;

  constructor (event, destinations) {
    this.#event = event;
    this.#destinations = destinations;
  }

  get template() {
    return createEventEditTemplate(this.#event, this.#destinations);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
