import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {
  renderHTML = () => {
    return (
      this.props.userList.map(user => {
        return <UserItem key={user.id} user={user} />
      })
    );
  }
  
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>userName</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderHTML()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    userList: state.userReducer.userList
  });
}

export default connect(mapStateToProps, null) (Users);
