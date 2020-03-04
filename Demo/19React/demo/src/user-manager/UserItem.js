import React, { Component } from "react";

class UserItem extends Component {
  render() {
    let user = this.props.user;
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => {this.props.deleteUser(user.id)}}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
