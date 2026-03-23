import React, { Component, createRef } from "react";
import BookList from "./components/BookList";
import AuthorInfo from "./components/AuthorInfo";
import SearchBar from "./components/SearchBar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedAuthor: null,
      searchText: "",
    };

    this.searchRef = createRef();
  }

  componentDidMount() {
    console.log("App Loaded - Data initialized");
  }

  handleSelectAuthor = (author) => {
    this.setState({ selectedAuthor: author });
  };

  handleSearch = (value) => {
    this.setState({ searchText: value });
  };

  focusSearch = () => {
    this.searchRef.current.focusInput();
  };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">📚 BookVerse</h1>

        <button className="btn btn-primary mb-3" onClick={this.focusSearch}>
          Focus Search
        </button>

        <SearchBar ref={this.searchRef} onSearch={this.handleSearch} />

        <BookList
          onSelectAuthor={this.handleSelectAuthor}
          searchText={this.state.searchText}
        />

        {this.state.selectedAuthor && (
          <AuthorInfo author={this.state.selectedAuthor} />
        )}
      </div>
    );
  }
}

export default App;