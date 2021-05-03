import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ENTER_KEY_CODE = 13;

export default class EditEntityInput extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleKeyDown = (event) => {
    const { value } = this.state;
    const { onEdit } = this.props;
    if (event.keyCode !== ENTER_KEY_CODE) {
      return;
    }

    onEdit(value);
  }

  render() {
    const { value } = this.state;

    return (
      <input
        type="text"
        value={value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

EditEntityInput.propTypes = {
  onEdit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,

};
