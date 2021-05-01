import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import * as Yup from 'yup';

export default class AddEntityForm extends Component {
  constructor() {
    super();
    this.validationSchema = Yup.object().shape({
      name: Yup.string().required(),
    });
  }

  handleSubmit = (values, action) => {
    const { onSubmit } = this.props;

    onSubmit(values);

    action.resetForm();
  }

  render() {
    return (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={this.validationSchema}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter list name.."
              onChange={handleChange}
              values={values.name}
            />
            <button type="submit">
              +
            </button>
          </form>
        )}
      </Formik>
    );
  }
}

AddEntityForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
