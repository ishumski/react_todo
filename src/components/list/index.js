import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import ListOfTasks from './list-of-tasks';
import AddEntityForm from '../common/add-entity-form';
import EntityType from '../../constance/entity-type';
import {
  getListTasks, addListTask, updateListTask, deleteListTask, deleteCheckedListTask,
} from '../../store/tasks/action';
import ActionStatus from '../../constance/action-status';
import Loader from '../common/Loader';

class List extends Component {
  componentDidMount() {
    const { getListTasks } = this.props;

    getListTasks();
  }

  handleAddListTask = (newTask) => {
    const { addListTask } = this.props;
    const order = getLastOrder(tasks);
    addListTask({ ...newTask, checked: false, order });
  }

  render() {
    const {
      tasks,
      updateListTask,
      status,
      deleteListTask,
      deleteCheckedListTask,
    } = this.props;

    const sortedTasks = [...tasks].sort((a, b) => (a - b));

    return (

      <>
        <div className="add-form">
          <AddEntityForm type={EntityType.TASK} onSubmit={this.handleAddListTask} />
        </div>

        <div className="todo-list">
          <ListOfTasks
            tasks={sortedTasks}
            onEdit={updateListTask}
            onDelete={deleteListTask}
          />
        </div>

        <div className="delete-checked-wrapper">
          <Button
            type="submit"
            className="delete-checked-btn"
            onClick={deleteCheckedListTask}
          >
            Delete Checked
          </Button>
        </div>

        {status === ActionStatus.LOADING && <Loader />}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    status: state.tasks.status,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { match: { params } } = ownProps;

  return {
    getListTasks: () => dispatch(getListTasks(params.id)),
    addListTask: (newTask) => dispatch(addListTask({ newTask, listId: params.id })),
    updateListTask: (task) => dispatch(updateListTask(task)),
    deleteListTask: (taskId) => dispatch(deleteListTask({ taskId, listId: params.id })),
    deleteCheckedListTask: () => dispatch(deleteCheckedListTask(params.id)),

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(List);

List.propTypes = {
  getListTasks: PropTypes.func.isRequired,
  addListTask: PropTypes.func.isRequired,
  updateListTask: PropTypes.func.isRequired,
  tasks: PropTypes.string.isRequired,
  deleteListTask: PropTypes.func.isRequired,
  deleteCheckedListTask: PropTypes.func.isRequired,
  // status: PropTypes.string.isRequired,
};
