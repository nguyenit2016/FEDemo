import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ]
    };
  }

  addUser = (user) => {
    this.setState({userList: [...this.state.userList, user]})
  }

  deleteUser = (id) => {
    let {userList} = {...this.state};
    let indexOfUser = userList.findIndex(x => x.id === id);
    if(indexOfUser != -1){
      userList.splice(indexOfUser, 1);

      this.setState({userList: userList})
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList={this.state.userList} deleteUser={this.deleteUser} />
        <Modal addUser={this.addUser} />
      </div>
    );
  }
}

export default Home;