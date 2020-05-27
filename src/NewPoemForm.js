import React from "react";

class NewPoemForm extends React.Component {
  state={
    title: '',
    author: '',
    text: ''

  }

handleChange=event=>{this.setState({[event.target.name]: event.target.value})}

submitData=event=>{
  event.preventDefault()
  let data= {...this.state}
  this.props.handleSubmit(data)
  this.setState({
      title: '',
      author: '',
      content: ''
     })


}

  render() {
    // console.log('newform props:', this.props)
    return (
      <form className="new-poem-form" onSubmit={this.submitData}>
        <input name='title' value={this.state.title} onChange={this.handleChange} placeholder="Title" />
        <input name='author' value={this.state.author} onChange={this.handleChange}placeholder="Author" />
        <textarea name='content' value={this.state.content} onChange={this.handleChange}placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
