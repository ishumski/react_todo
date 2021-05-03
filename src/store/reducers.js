import { combineReducers } from 'redux';
import lists from './lists/reducer';
import tasks from './tasks/reducer';

export default combineReducers({
  lists, tasks,
});
