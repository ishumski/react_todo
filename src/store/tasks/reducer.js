import * as types from './types';

import ActionStatus from '../../constance/action-status';

const initialState = {
  tasks: [],
  status: ActionStatus.IDLE,
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST_TASKS_REQUEST:
    case types.ADD_LIST_TASKS_REQUEST:
    case types.UPDATE_LIST_TASK_REQUEST:
    case types.DELETE_LIST_TASK_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING,
      };
    }

    case types.DELETE_CHECKED_LIST_TASK_SUCCEES: {
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.filter((task) => !action.payload.includes(task.id)),
      };
    }

    case types.DELETE_LIST_TASK_SUCCEES: {
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    case types.ADD_LIST_TASKS_SUCCEES: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        status: ActionStatus.SUCCEEDED,
      };
    }

    case types.UPDATE_LIST_TASK_SUCCEES: {
      const updatedTask = action.payload;
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.map((task) => {
          if (task.id === updatedTask.id) {
            return updatedTask;
          }
          return task;
        }),
      };
    }

    case types.GET_LIST_TASKS_SUCCEES: {
      return {
        ...state,
        tasks: action.payload,
        status: ActionStatus.SUCCEEDED,
      };
    }

    case types.REORDER_LIST_TASKS_SUCCEES: {
      const { from, to } = action.payload;
      console.log(from, to);
      const delta = from < to ? -1 : 1;
      return {
        ...state,
        status: ActionStatus.SUCCEEDED,
        tasks: state.tasks.map((task) => {
          if (task.order === from) {
            return { ...task, order: to };
          }

          if (delta) {

          }
          
          if (task.order > from && task.order <= to) {
            return { ...task, order: task.order + delta };
          }
          return task;
        }),
      };
    }

    default: {
      return state;
    }
  }
}
