import React from "react";

class NewPoemForm extends React.Component {
  state = { 
    title: "", 
    author: "", 
    content: ""
  }

  handleForm = (event) => { 
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form className="new-poem-form">
        <input name="title" onChange={(event) => this.handleForm(event)} value={this.state.title} placeholder="Title" />
        <input name="author" onChange={(event) => this.handleForm(event)} value={this.state.author} placeholder="Author" />
        <textarea name="content" onChange={(event) => this.handleForm(event)} value={this.state.content} placeholder="Write your masterpiece here..." rows={10} />
        <input onClick={(event) => this.props.submitNewPoem(event, this.state)} type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
