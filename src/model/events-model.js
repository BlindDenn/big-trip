import { generateEvent } from '../mock/event.js';

export default class EventsModel {
  events = Array.from({'length': 5}, generateEvent);

  getEvents = () => this.events;
}
