import { render } from '../render.js';
import EventsListView from '../view/events-list-view.js';
import EventView from '../view/event-view.js';
import EventAddView from '../view/event-add.js';
import EventEditView from '../view/event-edit.js';

export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor(eventsListContainer) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    render(this.eventsListComponent, this.eventsListContainer);
    render(new EventEditView(), this.eventsListComponent.getElement());
    render(new EventAddView(), this.eventsListComponent.getElement());
    for (let i = 1; i <= 3; i++) {
      render(new EventView(), this.eventsListComponent.getElement());
    }
  }
}

