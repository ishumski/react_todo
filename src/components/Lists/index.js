import React, { Component } from 'react';
import AddListForm from './add-list-form';
import ListOfLists from "./list-of-lists.js";
import { connect } from "react-redux";
import { addList, deleteList } from "../../store/lists/actions.js";
import { getLists } from "../../store/lists/actions.js"
import Loader from '../common/Loader.js';

class Lists extends Component {
    componentDidMount() {
        const { getLists } = this.props;
        getLists();
    }

    render() {
        const { lists, addList, deleteList, status } = this.props;
        return (
            <>
                <div className="add-form">
                    <AddListForm onSubmit={addList} />

                </div>

                <div className="lists">
                    <ListOfLists lists={lists} onDelete={deleteList} />
                </div>
                {status === "loading" && <Loader />}

            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        lists: state.lists.lists,
        status: state.lists.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addList: (list) => dispatch(addList(list)),
        deleteList: (id) => dispatch(deleteList(id)),
        getLists: () => dispatch(getLists()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);