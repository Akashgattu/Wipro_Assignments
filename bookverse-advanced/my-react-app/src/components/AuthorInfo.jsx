import React, { Component } from "react";

class AuthorInfo extends Component {
  componentDidMount() {
    console.log("Author Info Loaded");
  }

  render() {
    const { author } = this.props;

    return (
      <div className="card mt-4 p-3">
        <h3>{author.author}</h3>
        <p>{author.bio}</p>

        <h5>Top Books:</h5>
        <ul>
          {author.topBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AuthorInfo;