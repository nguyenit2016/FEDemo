import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from './../redux/action';

class Modal extends Component {
  render() {
    let userEdit = this.props.userEdit;
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
              <h5 className="modal-title">{userEdit.id ? 'EDIT' : 'ADD'} USER</h5>
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
              <form onSubmit={(event) => { this.props.submitUser(event) }}>
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
      dispatch(action.actChangeValue(target));
    },
    submitUser: (event) => {
      dispatch(action.actSubmitUser(event));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
