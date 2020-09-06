import {ArticlesActions} from '../index';
import articles from '../fixtures/articles.json'

export const Statuses = {
  INITIAL: 'initial',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const initialState = {
  status: Statuses.INITIAL,
  articles: articles,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case ArticlesActions.Types.LOAD_ARTICLES:
      return {...state, status: Statuses.LOADING, error: undefined};
    case ArticlesActions.Types.LOAD_ARTICLES_SUCCESS:
      return {...state, status: Statuses.SUCCESS, error: undefined, articles: action.articles};
    case ArticlesActions.Types.LOAD_ARTICLES_FAIL:
      return {...state, status: Statuses.ERROR, error: action.error};
    default:
      return state;
  }
}
