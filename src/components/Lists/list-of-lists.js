import React from 'react';
import PropTypes from 'prop-types';

const ListOfLists = ({ lists, onDelete }) => (
  <ol>
    {lists.map((list) => (
      <li key={list.id}>
        <a href="/">
          {list.name}
        </a>

        <button type="submit" className="delete-btn" onClick={() => onDelete(list.id)}>Delete</button>
      </li>
    ))}
  </ol>
);

ListOfLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListOfLists;
