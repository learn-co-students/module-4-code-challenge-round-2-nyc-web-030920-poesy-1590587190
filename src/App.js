import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from "./Favorites";

const poemUrl = 'http://localhost:6001/poems'

class App extends React.Component {

  state = {
    poems: [],
    toggled: false,
    favorites: [],
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

  deletePoem = (id) => {
    fetch(`${poemUrl}/${id}`, {
      method: 'DELETE'})
        .then(this.loadPoems())
  }

  checkStateVals = () => {
    let arrayCount = this.state.favorites
    return arrayCount.length
  }

  addToFav = (newFav) => {
    // doesn't remove from fav list, can add multiple of same book, stores in state
    // vs doing a PATCH req
        //didn't remove properly  

      this.setState({ favorites: [...this.state.favorites, newFav]})
  
  }

  render() {
    
    const { favorites } = this.state.favorites
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleToggle}>Show/hide new poem form</button>
          { this.state.toggled ? 
            <NewPoemForm 
              addNewPoem={this.addNewPoem}
            /> : null}
            
          {this.checkStateVals() ? <Favorites favorites={this.state.favorites} /> : null }
          
        </div>
        <PoemsContainer
          poems={this.state.poems}
          addToFav={this.addToFav}
          deletePoem={this.deletePoem}
          favorites={this.state.favorites}
        />
      </div>
    );
  }
}

export default App;
