import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const get_Backend = `http://localhost:6001/poems`

class App extends React.Component {

  state={
    poems: [],
    show:false
  }

  componentDidMount(){
    this.getpoems()
  }

  getpoems=()=>{
      fetch(get_Backend)
      .then(r=>r.json())
      .then(data => this.setState({poems: data}))

  }

  toggle=()=>{
    this.setState((currentState)=> ({show: !currentState.show}))
  }

  render() {
    console.log('app state:', this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggle}> Show/hide new poem form</button>
          {this.state.show && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
