import {ContactActions} from '../';

export const Statuses = {
  INITIAL: 'initial',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const initialState = {
  status: Statuses.INITIAL
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case ContactActions.Types.SEND_MESSAGE:
      return {...state, status: Statuses.LOADING, error: undefined};
    case ContactActions.Types.SEND_MESSAGE_SUCCESS:
      return {...state, status: Statuses.SUCCESS, error: undefined};
    case ContactActions.Types.SEND_MESSAGE_FAIL:
      return {...state, status: Statuses.ERROR, error: action.error};
    default:
      return state;
  }
}
