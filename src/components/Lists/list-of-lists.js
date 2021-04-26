import React, { Component } from 'react';

export default class ListOfLists extends Component {
    constructor(props) {
        super(props);
        this.props = props;

    }


    handleDelete() {

    }

    render() {

        const { lists } = this.props;

        return (
            <ol>{lists.map((list) => (
                <li key={list.id}>
                    <a href="#">
                        {list.name}
                    </a>

                    <button type="submit" className="delete-btn" onClick={this.handleDelete}>Delete</button>
                </li>
            ))}
            </ol>
        )
    }
}
