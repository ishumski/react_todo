import React from 'react';
import { Button } from '@material-ui/core';
import ListOfTasks from './list-of-tasks';
import AddEntityForm from '../common/add-entity-form';

function List() {
  return (
    <>
      <div className="add-form">
        <AddEntityForm />
      </div>

      <div className="todo-list">
        <ListOfTasks tasks={[]} />
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

export default List;
