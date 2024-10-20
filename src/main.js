import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import EventsListPresenter from './presenter/events-board-presenter.js';
import { RenderPosition, render } from './render.js';
import EventsModel from './model/events-model.js';
import DestinationModel from './model/destination-model.js';

const tripMainElement = document.querySelector('.trip-main');
const filtersElement = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const eventsModel = new EventsModel();
const destinationsModel = new DestinationModel();


render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersElement);
const eventsListPresenter = new EventsListPresenter();

eventsListPresenter.init(eventsContainer, eventsModel, destinationsModel);
