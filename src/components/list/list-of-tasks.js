import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import EditEntityInput from '../common/edit-entity-input';

export default class ListOfTasks extends Component {
  constructor() {
    super();

    this.state = {
      editTaskId: null,
    };

    this.EditEntityInput = React.createRef();
  }

  setEditTaskId = (editTaskId) => {
    this.setState({
      editTaskId,
    });
  };

  handleEdit = (value) => {
    const { tasks, onEdit } = this.props;
    const { editTaskId } = this.state;

    const task = tasks.find((t) => t.id === editTaskId);

    onEdit({ ...task, name: value });

    this.setEditTaskId(null);
  }

  handleEditButtonClick = (taskId) => {
    const { editTaskId } = this.state;
    if (editTaskId) {
      this.EditEntityInput.current.handleEdit();
      return;
    }
    this.setEditTaskId(taskId);
  }

  handleTaskCheck = (taskId) => {
    const { onEdit, tasks } = this.props;

    const task = tasks.find((t) => t.id === taskId);

    onEdit({ ...task, checked: !task.checked });
  }

  render() {
    const { tasks, onDelete } = this.props;
    const { editTaskId } = this.state;

    return (
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ol
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
                  index={index}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <input
                        type="checkbox"
                        defaultChecked={task.checked}
                        onChange={() => this.handleTaskCheck(task.id)}
                      />

                      {editTaskId === task.id ? (
                        <EditEntityInput
                          value={task.name}
                          onEdit={this.handleEdit}
                          ref={this.EditEntityInput}
                        />
                      ) : (
                        <span>{task.name}</span>
                      )}

                      <button
                        type="submit"
                        className="edit-btn"
                        onClick={() => this.handleEditButtonClick(task.id)}
                      >
                        edit
                      </button>

                      <button
                        type="submit"
                        className="delete-btn"
                        onClick={() => onDelete(task.id)}
                      >
                        delete
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

ListOfTasks.propTypes = {
  tasks: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
