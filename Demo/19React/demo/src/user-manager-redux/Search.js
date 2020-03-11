import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from './../redux/action';

class Search extends Component {
  render() {
    return (
      <input type="text" className="form-control mb-3 w-50"
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            this.props.search(event.target.value);
          }
        }}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (keyWord) => {
      dispatch(action.actSearch(keyWord));
    }
  }
}

export default connect(null, mapDispatchToProps)(Search);
