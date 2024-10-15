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
    // render(new EventEditView(this.#events[0], this.#destinations), this.#eventsListComponent.element);
    // render(new EventEditView({}, this.#destinations), this.#eventsListComponent.element);
    for (const event of this.#events) {
      this.#renderEvent(event, this.#destinations);
    }
  }

  #renderEvent = (event, destinations) => {
    const eventComponent = new EventView(event);
    const eventEditComponent = new EventEditView(event, destinations);

    const replaceCardToForm = () => {
      this.#eventsListComponent.element.replaceChild(eventEditComponent.element, eventComponent.element);
      document.addEventListener('keydown', onEscKeyDown);
    };

    const replaceFormToCard = () => {
      this.#eventsListComponent.element.replaceChild(eventComponent.element, eventEditComponent.element);
    };

    eventComponent.element.querySelector('.event__rollup-btn').addEventListener('click', replaceCardToForm);

    eventEditComponent.element.querySelector('form').addEventListener('submit', onFormSubmit);

    function onFormSubmit (evt) {
      evt.preventDefault();
      replaceFormToCard();
      document.removeEventListener('keydown', onEscKeyDown);
    }

    function onEscKeyDown (evt) {
      evt.preventDefault();
      if (evt.code === 'Escape') {
        replaceFormToCard();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    }

    render(eventComponent, this.#eventsListComponent.element);
  };
}

