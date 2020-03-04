import React, { Component } from "react";

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      name: '',
      email: '',
      phoneNumber: '',
      type: 'USER'
    }
  }

  addUser = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
  }

  handleOnChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.addUser}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="userName"
                  onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name"
                  onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email"
                  onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber"
                  onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.handleOnChange}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
