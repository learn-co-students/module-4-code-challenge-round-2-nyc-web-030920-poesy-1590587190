import React from "react";

class NewPoemForm extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <form className="new-poem-form" onSubmit = {this.props.handleSubmit}>
        <input name = "title" value = {this.props.title} onChange = {this.props.handleChange} placeholder="Title" />
        <input name = "author" value = {this.props.author} onChange = {this.props.handleChange} placeholder="Author" />
        <textarea name = "content" value = {this.props.content} onChange = {this.props.handleChange} placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
