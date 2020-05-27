import React from "react";

class Poem extends React.Component {
  render() {
    let { title, content, author } = this.props
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
