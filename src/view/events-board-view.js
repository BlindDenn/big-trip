import { createElement } from '../render.js';

const createEventsBoardTemplate = () =>
  `<section class="trip-events">
    <h2 class="visually-hidden">Trip events</h2>
  </section>`;

export default class EventsBoardView {
  #element;

  get template() {
    return createEventsBoardTemplate();
  }

  get element() {
    if (!this.element) {
      this.#elementEventsBoardView = createElement(this.template);
    }

    return this.#element;
  }
}


