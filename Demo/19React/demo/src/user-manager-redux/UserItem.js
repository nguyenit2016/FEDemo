import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from './../redux/action';

class UserItem extends Component {
  render() {
    let user = this.props.user;
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => { this.props.getUserEdit(user) }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => { this.props.deleteUser(user.id) }}>Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (userId) => {
      dispatch(action.actDelete(userId));
    },
    getUserEdit: (user) => {
      dispatch(action.actGetUserEdit(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(UserItem);
