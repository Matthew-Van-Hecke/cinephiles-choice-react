import React, { Component } from 'react';
import './MovieDisplay.css';

class MovieDisplay extends Component {
    static defaultProps = {
        movie:
        {
            "id":265,
            "title":"Dunkirk",
            "year":"2017",
            "director":"Christopher Nolan",
            "genre":"Action, Drama, History, Thriller, War",
            "actors":"Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong",
            "poster":"https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
        }
    };
    render(){
        let movie = this.props.movie;
        return(
            <div className="MovieDisplay">
                <img className="MovieDisplay-image" src={movie.poster} alt={movie.title}></img>
                <div className="MovieDisplay-info">
                    <h5>Title: {movie.title}</h5>
                    <h5>Director: {movie.director}</h5>
                </div>
            </div>
        );
    }
}

export default MovieDisplay;