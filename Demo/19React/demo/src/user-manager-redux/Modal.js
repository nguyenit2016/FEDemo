import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     id: '',
  //     userName: '',
  //     name: '',
  //     email: '',
  //     phoneNumber: '',
  //     type: 'USER'
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   debugger
  //   if (nextProps && nextProps.userEdit) {
  //     this.setState({
  //       id: nextProps.userEdit.id,
  //       userName: nextProps.userEdit.userName,
  //       name: nextProps.userEdit.name,
  //       email: nextProps.userEdit.email,
  //       phoneNumber: nextProps.userEdit.phoneNumber,
  //       type: nextProps.userEdit.type
  //     });
  //   } else {
  //     this.setState({
  //       id: '',
  //       userName: '',
  //       name: '',
  //       email: '',
  //       phoneNumber: '',
  //       type: 'USER'
  //     })
  //   }
  // }

  // submitUser = (event) => {
  //   event.preventDefault();
  //   this.props.submitUser(this.state);
  // }

  // handleOnChange = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;

  //   this.setState({
  //     [name]: value
  //   }, () => {
  //     console.log(this.state);
  //   });
  // }

  render() {
    let userEdit = this.props.userEdit;
    debugger
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
              <h5 className="modal-title">{userEdit ? 'EDIT' : 'ADD'} USER</h5>
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
              <form onSubmit={(event) => {this.props.submitUser(event)}}>
                <div className="form-group">
                  <label>userName</label>
                  <input type="text" className="form-control" name="userName"
                    onChange={(event) => { this.props.changeValue(event.target) }}
                    value={userEdit?.userName}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name"
                    onChange={(event) => { this.props.changeValue(event.target) }}
                    value={userEdit?.name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email"
                    onChange={(event) => { this.props.changeValue(event.target) }}
                    value={userEdit?.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber"
                    onChange={(event) => { this.props.changeValue(event.target) }}
                    value={userEdit?.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" value={userEdit?.type} onChange={(event) => { this.props.changeValue(event.target) }}>
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

const mapStateToProps = (state) => {
  return ({
    userEdit: state.userReducer.userEdit
  });
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeValue: (target) => {
      let action = {
        type: 'CHANGEVALUE',
        target: target
      };
      dispatch(action);
    },
    submitUser: (event) => {
      let action = {
        type: 'SUBMITUSER',
        event: event
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Modal);
