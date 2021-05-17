import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import ListOfTasks from './list-of-tasks';
import AddEntityForm from '../common/add-entity-form';
import EntityType from '../../constance/entity-type';
import {
  getListTasks,
  addListTask,
  updateListTask,
  deleteListTask,
  deleteCheckedListTask,
  reorderListTasks,
} from '../../store/tasks/action';
import ActionStatus from '../../constance/action-status';
import Loader from '../common/Loader';
import { getLastOrder } from '../../utils/index';

class List extends Component {
  componentDidMount() {
    const { getListTasks } = this.props;

    getListTasks();
  }

  handleAddListTask = (newTask) => {
    const { addListTask, tasks } = this.props;
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
      reorderListTasks,
    } = this.props;

    const sortedTasks = [...tasks].sort((a, b) => (a.order - b.order));

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
            onReorder={reorderListTasks}
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
    reorderListTasks: ({ from, to }) => dispatch(reorderListTasks({ listId: params.id, from, to })),

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(List);

List.propTypes = {
  getListTasks: PropTypes.func.isRequired,
  addListTask: PropTypes.func.isRequired,
  updateListTask: PropTypes.func.isRequired,
  deleteListTask: PropTypes.func.isRequired,
  deleteCheckedListTask: PropTypes.func.isRequired,
  reorderListTasks: PropTypes.func.isRequired,

};
