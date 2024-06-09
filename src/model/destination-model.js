import { DESTINATION } from '../mock/destination.js';

export default class DestinationModel {
  #destinations = DESTINATION;

  get destinations() {
    return this.#destinations;
  }
}
