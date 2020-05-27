import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.poems.map((poem) => <Poem 
            key={poem.id}
            poem={poem}
            addToFav={this.props.addToFav}
            deletePoem={this.props.deletePoem}
            favorites={this.props.favorites}
          />)
        }
      </div>
    );
  }
}

export default PoemsContainer;
