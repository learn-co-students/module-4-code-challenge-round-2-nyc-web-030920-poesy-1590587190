import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const URL = 'http://localhost:6001/poems'

class App extends React.Component {

  state = {
    clicked: false,
    poems: [],
    title:'',
    author:'',
    content:''
  }

  toggleClicked = () => {
    this.setState({clicked: !this.state.clicked})
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(poems => 
      this.setState({poems}))
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL,{
      method: "POST",
      headers: {
        "Content-type": "application/json",
         Accept:'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        author: this.state.author

      })
    })
    .then(res => res.json())
    .then((data) => 
    this.setState({ poems: [...this.state.poems, data]})
    )
    this.resetForm();
  }

  resetForm = () => {
    this.setState ({
      title: '',
      content: '',
      author: ''
    })

  }

  
  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.toggleClicked}>Show/hide new poem form</button>
          {this.state.clicked ? true && <NewPoemForm handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} title = {this.state.title} author = {this.state.author} content = {this.state.content}/>:null }
        </div>
        <PoemsContainer poems = {this.state.poems} />
      </div>
    );
  }
}

export default App;
