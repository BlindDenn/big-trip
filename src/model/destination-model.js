import { DESTINATION } from '../mock/destination.js';

export default class DestinationModel {
  destinations = DESTINATION;

  getDestinations = () => this.destinations;
}
