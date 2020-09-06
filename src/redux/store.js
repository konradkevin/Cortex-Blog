import {combineReducers, createStore, compose} from 'redux'
import middlewaresEnhancer from './middlewares';
import {AboutReducers} from '../modules/about'
import {ArticlesReducers} from "../modules/articles";
import {ContactReducers} from "../modules/contact";

const enhancers = compose(middlewaresEnhancer)

const store = createStore(
  combineReducers({
    about: AboutReducers,
    contact: ContactReducers,
    articles: ArticlesReducers,
  }),
  enhancers
);

export default store;
