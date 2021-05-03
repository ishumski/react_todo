import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import ListOfTasks from './list-of-tasks';
import AddEntityForm from '../common/add-entity-form';
import EntityType from '../../constance/entity-type';
import { getListTasks, addListTask, updateListTask } from '../../store/tasks/action';

class List extends Component {
  componentDidMount() {
    const { getListTasks } = this.props;

    getListTasks();
  }

  render() {
    const { addListTask, tasks, updateListTask } = this.props;

    return (

      <>
        <div className="add-form">
          <AddEntityForm type={EntityType.TASK} onSubmit={addListTask} />
        </div>

        <div className="todo-list">
          <ListOfTasks tasks={tasks} onEdit={updateListTask} />
        </div>

        <div className="delete-checked-wrapper">
          <Button
            type="submit"
            className="delete-checked-btn"
          >
            Delete Checked
          </Button>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
    status: state.tasks.tasks,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { match: { params } } = ownProps;

  return {
    getListTasks: () => dispatch(getListTasks(params.id)),
    addListTask: (newTask) => dispatch(addListTask({ newTask, listId: params.id })),
    updateListTask: (task) => dispatch(updateListTask(task)),

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(List);

List.propTypes = {
  getListTasks: PropTypes.func.isRequired,
  addListTask: PropTypes.func.isRequired,
  updateListTask: PropTypes.func.isRequired,
  tasks: PropTypes.string.isRequired,
};
