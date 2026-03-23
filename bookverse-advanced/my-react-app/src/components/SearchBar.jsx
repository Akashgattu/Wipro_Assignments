import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <input
        ref={this.inputRef}
        type="text"
        placeholder="Search books..."
        className="form-control mb-3"
        onChange={(e) => this.props.onSearch(e.target.value)}
      />
    );
  }
}

export default SearchBar;