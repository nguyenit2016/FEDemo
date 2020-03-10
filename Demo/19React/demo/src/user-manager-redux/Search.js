import React, { Component } from "react";
import { connect } from "react-redux";

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
      let action = {
        type: 'SEARCH',
        keyWord: keyWord
      };
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(Search);
