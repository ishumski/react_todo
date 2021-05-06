import * as types from './types';

import ActionStatus from '../../constance/action-status';

const initialState = {
  tasks: [],
  status: ActionStatus.IDLE,
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST_TASKS_REQUEST:
    case types.ADD_LIST_TASKS_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING,
      };
    }

    case types.ADD_LIST_TASKS_SUCCEES: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        status: ActionStatus.SUCCEEDED,
      };
    }

    case types.DELETE_LIST_TASK_SUCCEES: {
      return {
        ...state,
        tasks: state.tasks.filter(
          (t) => t.id !== action.payload,
        ),
        status: ActionStatus.SUCCEEDED,
      };
    }

    case types.GET_LIST_TASKS_SUCCEES: {
      return {
        ...state,
        tasks: action.payload,
        status: ActionStatus.SUCCEEDED,
      };
    }

    default: {
      return state;
    }
  }
}
