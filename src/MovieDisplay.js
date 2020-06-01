import React, { Component } from 'react';
import './MovieDisplay.css';

class MovieDisplay extends Component {
    static defaultProps = {
        nomination: {"id":3157,"nominee":"Gary Oldman","movieId":254,"movie":{
            "id":254,"title":"Darkest Hour","year":"2017","director":"Joe Wright","genre":"Biography, Drama, History, War","actors":"Gary Oldman, Kristin Scott Thomas, Ben Mendelsohn, Lily James","poster":"https://m.media-amazon.com/images/M/MV5BNTU4MjMwOTgyMV5BMl5BanBnXkFtZTgwODQzNjY2NDM@._V1_SX300.jpg"
        }
    }
    };
    render(){
        let movie = this.props.nomination.movie;
        return(
            <div className="MovieDisplay">
                <img className="MovieDisplay-image" src={movie.poster} alt={movie.title}></img>
                <div className="MovieDisplay-info">
                    <div>
                        <h6>Nominee: {this.props.nomination.nominee}</h6>
                        <h6>Film: {movie.title}</h6>
                        <h6>Directed by: {movie.director}</h6>
                        <h6>Genre(s): {movie.genre}</h6>
                        <h6>Starring: {movie.actors}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDisplay;