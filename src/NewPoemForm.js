import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: '',
    author: '',
    content: '',
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      fetch('http://localhost:6001/poems', {
        method: "POST",
        headers:{
          "content-type" : "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({
          title:this.state.title,
          author: this.state.author,
          content: this.state.content
        })
      })
      .then(resp => resp.json())
      .then(newPoem => this.props.addForm(newPoem))
      .then(this.setState({
        title: '',
        author: '',
        content: '',
      }))
    }
  render() {
    // console.log('round 2',this.state)
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" value={this.state.content} onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
