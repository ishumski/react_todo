import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditEntityInput from '../common/edit-entity-input';

export default class ListOfTasks extends Component {
  constructor() {
    super();

    this.state = {
      editTaskId: null,
    };
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
  }

   handleDelete = () => {
     console.log('delete');
   }

   render() {
     const { tasks } = this.props;
     const { editTaskId } = this.state;

     return (
       <ol>
         {tasks.map((task) => (
           <li key={task.id}>
             <input type="checkbox" />

             {editTaskId === task.id ? (
               <EditEntityInput value={task.name} onEdit={this.handleEdit} />
             ) : (
               <span>{task.name}</span>
             )}

             <button
               type="submit"
               className="edit-btn"
               onClick={() => this.setEditTaskId(task.id)}
             >
               edit
             </button>

             <button
               type="submit"
               className="delete-btn"
               onClick={this.handleDelete}
             >
               delete
             </button>
           </li>
         ))}
       </ol>
     );
   }
}

ListOfTasks.propTypes = {
  tasks: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,

};
