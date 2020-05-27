import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: [],
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        poems: data
      })
    })
  }

  addForm = (newpoems) => {
    this.setState({
      poems:[...this.state.poems,newpoems]
    })
  }

  render() {
    // console.log("First Console Log", this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm addForm={this.addForm} />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
