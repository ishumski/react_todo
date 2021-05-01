import React from 'react';
import PropTypes from 'prop-types';

export default function ListOfTasks({ tasks }) {
  return (
    <ol>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" />

          <span>{task.text}</span>

          <button type="submit" className="edit-btn">
            edit
          </button>

          <button type="submit" className="delete-btn">
            delete
          </button>
        </li>
      ))}
    </ol>
  );
}

ListOfTasks.propTypes = {
  tasks: PropTypes.string.isRequired,
};
