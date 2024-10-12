import { DESTINATIONS } from '../mock/destination.js';

export default class DestinationModel {
  #destinations = DESTINATIONS;

  get destinations() {
    return this.#destinations;
  }
}
