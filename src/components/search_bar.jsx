import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value); // child calling function from parent
  }

  render() {
    return (
    <input type="text" className="form-control form-search" onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
