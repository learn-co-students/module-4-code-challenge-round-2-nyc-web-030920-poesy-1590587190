import React from "react";

class Poem extends React.Component {

  state={
    text:'Mark as Read'
  }

  changeText=(text)=>{
    this.setState({text})
  }
  render() {
    // console.log('poem props:', this.props)
    let {title, content, author} = this.props
    const {text} = this.state
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={()=>{this.changeText("Marked as unread")}}>{text}</button>
      </div>
    );
  }
}

export default Poem;
