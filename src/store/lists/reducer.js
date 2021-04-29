import * as types from './types';
import ActionStatus from '../../constance/action-status';

const initialState = {
  lists: [],
  status: ActionStatus.IDLE,

};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LIST_SUCCESS: {
      return { ...state, lists: [...state.lists, action.payload], status: 'succeed' };
    }
    case types.DELETE_LIST_SUCCESS: {
      return { ...state, lists: state.lists.filter((list) => list.id !== action.id), status: 'succeed' };
    }

    case types.GET_LISTS_REQUEST:
    case types.DELETE_LIST_REQUEST:
    case types.ADD_LIST_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING,
      };
    }

    case types.DELETE_LIST_FAILURE: {
      return {
        ...state,
        status: ActionStatus.FAILED,
      };
    }

    case types.GET_LISTS_SUCCESS: {
      return {
        ...state,
        lists: action.payload,
        status: ActionStatus.SUCCEEDED,
      };
    }
    default: {
      return state;
    }
  }
}
