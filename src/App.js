import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const poemUrl = 'http://localhost:6001/poems'

class App extends React.Component {

  state = {
    poems: [],
    toggled: false,
  }

  loadPoems =() => {
    fetch(poemUrl)
      .then(response => response.json())
      .then(poems => this.setState({ poems }))
  }

  componentDidMount() {
    this.loadPoems()
  }

  handleToggle = () => {
    this.setState({ toggled: !this.state.toggled})
  }

  addNewPoem = (newPoem) => {
    fetch(poemUrl, {
      method: 'POST',
      body: JSON.stringify({
        title: newPoem.title,
        author: newPoem.author,
        content: newPoem.content}),
      headers: {"Content-type": "application/json; charset=UTF-8"}})
        .then(response => response.json())
        .then(poem => this.setState({poems: [...this.state.poems, poem]}))
        .then(this.handleToggle())
  }

  render() {
    
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleToggle}>Show/hide new poem form</button>
          { this.state.toggled ? 
            <NewPoemForm 
              addNewPoem={this.addNewPoem}
            /> : null}
        </div>
        <PoemsContainer
          poems={this.state.poems}
        />
      </div>
    );
  }
}

export default App;
