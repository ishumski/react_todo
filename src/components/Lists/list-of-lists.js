import React, { Component } from 'react';

export default class ListOfLists extends Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    handleDeleteTask(name) {

        const filteredTasks = this.props.lists.filter(list => list.name !== name);

        this.setState({
            lists: filteredTasks,

        })

        console.log(filteredTasks);
    }

    render() {

        const { lists } = this.props;

        return (
            <ol>{lists.map((list) => (
                <li key={list.id}>
                    <a href="#">
                        {list.name}
                    </a>

                    <button type="submit" className="delete-btn" onClick={this.handleDeleteTask}>Delete</button>
                </li>
            ))}
            </ol>
        )
    }
}
