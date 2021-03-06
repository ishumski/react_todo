import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../common/Loader';
import ListOfLists from './list-of-lists';
import AddEntityForm from '../common/add-entity-form';
import ActionStatus from '../../constance/action-status';
import { addList, deleteList, getLists } from '../../store/lists/actions';
import EntityType from '../../constance/entity-type';

class Lists extends Component {
  componentDidMount() {
    const { getLists, auth0: { user } } = this.props;
    getLists(user.sub);
  }

  handleAddList = (newList) => {
    const { auth0: { user }, addList } = this.props;

    addList({ ...newList, userId: user.sub });
  }

  render() {
    const {
      lists, deleteList, status,
    } = this.props;

    return (
      <>
        <div className="add-form">
          <AddEntityForm onSubmit={this.handleAddList} type={EntityType.LIST} />
        </div>

        <div className="lists">
          <ListOfLists lists={lists} onDelete={deleteList} />
        </div>

        {status === ActionStatus.LOADING && <Loader />}

      </>
    );
  }
}

Lists.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addList: PropTypes.func.isRequired,
  getLists: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  status: PropTypes.oneOf([
    ActionStatus.IDLE,
    ActionStatus.SUCCEEDED,
    ActionStatus.LOADING,
    ActionStatus.FAILED,
  ]).isRequired,
};

function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    status: state.lists.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addList: (list) => dispatch(addList(list)),
    deleteList: (id) => dispatch(deleteList(id)),
    getLists: (userId) => dispatch(getLists(userId)),
  };
}

export default withAuth0(connect(mapStateToProps, mapDispatchToProps)(Lists));
