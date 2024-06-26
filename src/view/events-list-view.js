import {createElement} from '../render.js';

const createEventsListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class EventsListView {
  #element;

  get template() {
    return createEventsListTemplate();
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
