import React from "react";

class Poem extends React.Component {
    state = {
      read: true
    }

    toggleClicked = () =>{
      this.setState({read: !this.state.read})
    }
  render() {
    const{title,content,author} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>{author}</strong>
        </p>
        <button onClick = {this.toggleClicked}>{this.state.read ? 'Mark as read' : 'Mark as unread'} </button>
      </div>
    );
  }
}

export default Poem;
