import React from "react";

class Poem extends React.Component {

  state = {
    read: false,
  }

  handleRead = () => {
    this.setState({ read: !this.state.read })
  }

  render() {
    const {author, content, title} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.handleRead}>
          {this.state.read ? "Mark as unread" : "Mark as read"}
        </button>
      </div>
    );
  }
}

export default Poem;
