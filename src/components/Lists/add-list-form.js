import React, { Component } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";



export default class AddListForm extends Component {
    constructor() {
        super();
        this.validationSchema = Yup.object().shape({
            name: Yup.string().required(),
        });
    }


    render() {
        const { onSubmit } = this.props;
        return (
            <Formik initialValues={{ name: "" }} onSubmit={onSubmit} validationSchema={this.validationSchema}>
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
        )
    }
}
