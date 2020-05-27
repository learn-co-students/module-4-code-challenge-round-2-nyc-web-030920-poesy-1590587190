import React from "react";

class Poem extends React.Component {

  state = {
    read: false,
  }

  handleRead = () => {
    this.setState({ read: !this.state.read })
  }

  isFavorite = () => {

  }


  render() {
    const {author, content, title, id} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.handleRead}>
          {this.state.read ? "Mark as unread" : "Mark as read"}
        </button>
        <button onClick={() => this.props.addToFav(this.props.poem)}>
          {this.props.favorites.find( ({ poemId }) => poemId === this.props.id) ? "Remove from Favs" : "Add to Favs"}
        </button>
        <button onClick={() => this.props.deletePoem(id)}>
          Delete Poem
        </button>
      </div>
    );
  }
}

export default Poem;
