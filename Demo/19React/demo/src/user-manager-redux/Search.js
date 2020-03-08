import React, { Component } from "react";

class Search extends Component {
  render() {
    return <input type="text" className="form-control mb-3 w-50"
    onKeyDown={(event) => {
      if(event.keyCode == 13){
        this.props.search(event.target.value);
      }
    }}
    />;
  }
}

export default Search;
