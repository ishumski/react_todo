import React, { Component } from 'react';
import AddListForm from './add-list-form';
import ListOfLists from "./list-of-lists.js";
import { connect } from "react-redux";
import { addList } from "../../store/lists/actions.js";

class Lists extends Component {
    render() {
        const { lists, addList } = this.props;
        return (
            <>
                <div className="add-form">
                    <AddListForm onSubmit={addList} />

                </div>

                <div className="lists">
                    <ListOfLists lists={lists} />
                </div>
            </>
        )
    }
}


function mapStateToProps(state) {
    return {
        lists: state.lists.lists
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addList: (list) => dispatch(addList(list)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);