import { render } from '../render.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
// import EventAddView from '../view/event-add.js';
import EventEditView from '../view/event-edit-view.js';

export default class EventsListPresenter {
  #eventsListComponent = new EventsListView();
  #eventsListContainer = null;
  #eventsModel = null;
  #events = null;
  #destinationsModel = null;
  #destinations = null;

  init(eventsListContainer, eventsModel, destinationsModel) {
    this.#eventsListContainer = eventsListContainer;
    this.#eventsModel = eventsModel;
    this.#events = [...this.#eventsModel.events];
    this.#destinationsModel = destinationsModel;
    this.#destinations = [...this.#destinationsModel.destinations];


    render(this.#eventsListComponent, this.#eventsListContainer);
    render(new EventEditView(this.#events[0], this.#destinations), this.#eventsListComponent.getElement());
    render(new EventEditView({}, this.#destinations), this.#eventsListComponent.getElement());
    for (const event of this.#events) {
      render(new EventView(event), this.#eventsListComponent.getElement());
    }
  }
}

