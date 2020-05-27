import React from "react";

class Poem extends React.Component {
  state = { 
    read: false
  }

  markRead = () => { 
    this.setState({ read: !this.state.read})
  }

  render() {
    let { title, content, author } = this.props
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>
        <button onClick={this.markRead}>{this.state.read === false ? "Mark read" : "Mark as unread"} </button>
      </div>
    );
  }
}

export default Poem;
