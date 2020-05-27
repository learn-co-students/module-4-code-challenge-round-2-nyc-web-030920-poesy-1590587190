import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: '',
    author: '',
    content: ''
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewPoem(this.state)
    this.setState({
      title: '',
      author: '',
      content: '',
    })
  }


  render() {

    return (
      <form className="new-poem-form" 
        onSubmit={this.handleSubmit}>
        <input 
          placeholder="Title" 
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input 
          placeholder="Author"
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <textarea 
          placeholder="Write your masterpiece here..."
          rows={10} 
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
