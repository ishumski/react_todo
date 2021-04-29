import React from 'react'

function ListOfTasks({ tasks }) {
  return (
    <ol>{tasks.map((task) => {
      <li key={task.id}>
        <input type="checkbox" />

        <span>{task.text}</span>

        <button className="edit-btn">
          <i className="fas fa-edit"></i>
        </button>

        <button className="delete-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    })}
    </ol>
  )
}

export default ListOfTasks;
