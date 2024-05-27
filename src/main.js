import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import EventsListPresenter from './presenter/events-list-presenter.js';
import { RenderPosition, render } from './render.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersElement = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersElement);
render(new SortView(), eventsContainer);
const eventsListPresenter = new EventsListPresenter(eventsContainer);

eventsListPresenter.init();