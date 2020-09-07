import {combineReducers, createStore, compose} from 'redux'
import middlewaresEnhancer from './middlewares';
import {AboutReducers} from '../../about'
import {ArticlesReducers} from "../../articles";
import {ContactReducers} from "../../contact";

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
