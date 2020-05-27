import React from "react";

class Favorites extends React.Component {
    render() {
        return (
            <div>
                <h2>Favorites:</h2>
                <ol>
                    {this.props.favorites.map(favorite => {
                       return <li key={favorite.id}>{favorite.title}</li>
                    })}
                </ol>
            </div>
        );
    }
}

export default Favorites;
