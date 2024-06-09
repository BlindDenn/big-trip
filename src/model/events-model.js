import { generateEvent } from '../mock/event.js';

export default class EventsModel {
  #events = Array.from({'length': 5}, generateEvent);

  get events() {
    return this.#events;
  }
}
