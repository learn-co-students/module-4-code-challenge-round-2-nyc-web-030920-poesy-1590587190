import React from "react";

class Poem extends React.Component {
//  Have to define state to change something from read to unread
// button will be clicked
// Once clicked, it will run through setState etc 
  state = {
    read: true
  }

  handleClick = () => {
    this.setState({
      read: !this.state.read 
    })

  }


  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>{this.props.poem.author}</strong>
        </p>
        {/* Confued by this, COME BACK TO IT !!!, delete button? */}
    <button onClick={this.handleClick}> {this.state.read ? "Mark as read": "Mark as unread"}Mark as read</button>
      </div>
    );
  }
}

export default Poem;
