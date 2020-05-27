import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const allPoemsUrl = "http://localhost:6001/poems";
const headers = {
  "content-type": "application/json",
  accept: "application/json",
};

class App extends React.Component {
  state = {
    allPoems: [],
    visible: false,
  };

  componentDidMount() {
    this.fetchPoems();
  }

  fetchPoems = () => {
    fetch(allPoemsUrl)
      .then((res) => res.json())
      .then((allPoems) => {
        this.setState({ allPoems });
      });
  };

  toggleForm = () => {
    this.setState({ visible: !this.state.visible });
  };

  submitNewPoem = (event, newPoem) => {
    event.preventDefault();

    fetch(allPoemsUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        title: newPoem.title,
        content: newPoem.content,
        author: newPoem.author,
      }),
    })
      .then((res) => res.json())
      .then((submittedPoem) => {
        let allPoemsCopy = [...this.state.allPoems];
        this.setState({
          allPoems: [...allPoemsCopy, submittedPoem],
        });
      });
  };

  deletePoem = (deletedPoem) => {
    fetch(`${allPoemsUrl}/${deletedPoem.id}`, {
      method: "DELETE",
      headers,
      body: JSON.stringify(),
    });

    let allPoemsCopy = [...this.state.allPoems];
    let updatedAllPoems = allPoemsCopy.filter(poem => deletedPoem.id !== poem.id);
    this.setState({ allPoems: updatedAllPoems })
  };

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.visible === true && (
            <NewPoemForm submitNewPoem={this.submitNewPoem} />
          )}
        </div>
        <PoemsContainer
          allPoems={this.state.allPoems}
          deletePoem={this.deletePoem}
        />
      </div>
    );
  }
}

export default App;
