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
          userName: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          userName: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      userEdit: null,
      keyWord: ''
    };
  }

  submitUser = (user) => {
    if (user.id) {
      let userListTemp = this.state.userList;
      let indexOfUser = userListTemp.findIndex(x => x.id == user.id);
      if (indexOfUser != -1) {
        userListTemp[indexOfUser] = user;
        this.setState({ userList: [...userListTemp], userEdit: user })
      }
    } else {
      this.setState({ userList: [...this.state.userList, user] });
    }
  }

  deleteUser = (id) => {
    let { userList } = { ...this.state };
    let indexOfUser = userList.findIndex(x => x.id === id);
    if (indexOfUser !== -1) {
      userList.splice(indexOfUser, 1);
      this.setState({ userList: userList })
    }
  }

  search = (keyWord) => {
    this.setState({ keyWord })
  }

  render() {
    let { userList, keyWord } = this.state;
    let userListSearch = userList.filter((user) => {
      return user.name.toLowerCase().includes(keyWord.toLowerCase());
    })
    
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management Redux</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search search={this.search} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => { this.setState({ userEdit: null }) }}
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal submitUser={this.submitUser} />
      </div>
    );
  }
}

export default Home;