import authors from '../fixtures/authors.json'

export const Statuses = {
  INITIAL: 'initial',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const initialState = {
  status: Statuses.INITIAL,
  authors: authors,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
