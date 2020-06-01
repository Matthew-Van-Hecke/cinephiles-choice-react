import React, { Component } from 'react';
import MovieDisplay from './MovieDisplay';

class NominationsDisplay extends Component {
    static defaultProps = {
        nominations: [
            {"id":3154,"nominee":"Timothee Chalamet","movieId":248,"movie":{
                "id":248,"title":"Call Me by Your Name","year":"2017","director":"Luca Guadagnino","genre":"Drama, Romance","actors":"Armie Hammer, Timothée Chalamet, Michael Stuhlbarg, Amira Casar","poster":"https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_SX300.jpg"
            },"awardCategory":"ACTOR IN A LEADING ROLE","isWinner":false,"year":"2017"},
            {"id":3155,"nominee":"Daniel Day-Lewis","movieId":249,"movie":{
                "id":249,"title":"Phantom Thread","year":"2017","director":"Paul Thomas Anderson","genre":"Drama, Romance","actors":"Vicky Krieps, Daniel Day-Lewis, Lesley Manville, Julie Vollono","poster":"https://m.media-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
            },"awardCategory":"ACTOR IN A LEADING ROLE","isWinner":false,"year":"2017"},
            {"id":3156,"nominee":"Daniel Kaluuya","movieId":252,"movie":{
                "id":252,"title":"Get Out","year":"2017","director":"Jordan Peele","genre":"Horror, Mystery, Thriller","actors":"Daniel Kaluuya, Allison Williams, Catherine Keener, Bradley Whitford","poster":"https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg"
            },"awardCategory":"ACTOR IN A LEADING ROLE","isWinner":false,"year":"2017"},
            {"id":3157,"nominee":"Gary Oldman","movieId":254,"movie":{
                "id":254,"title":"Darkest Hour","year":"2017","director":"Joe Wright","genre":"Biography, Drama, History, War","actors":"Gary Oldman, Kristin Scott Thomas, Ben Mendelsohn, Lily James","poster":"https://m.media-amazon.com/images/M/MV5BNTU4MjMwOTgyMV5BMl5BanBnXkFtZTgwODQzNjY2NDM@._V1_SX300.jpg"
            },"awardCategory":"ACTOR IN A LEADING ROLE","isWinner":true,"year":"2017"},
            {"id":3158,"nominee":"Denzel Washington","movieId":251,"movie":{
                "id":251,"title":"Roman J. Israel, Esq.","year":"2017","director":"Dan Gilroy","genre":"Crime, Drama, Thriller","actors":"Denzel Washington, Colin Farrell, Carmen Ejogo, Lynda Gravatt","poster":"https://m.media-amazon.com/images/M/MV5BMjMyNjkxMTg2NV5BMl5BanBnXkFtZTgwNjkyNTk0MzI@._V1_SX300.jpg"
            },"awardCategory":"ACTOR IN A LEADING ROLE","isWinner":false,"year":"2017"}
        ]
    }
    render(){
        let nominations = this.props.nominations;
        return nominations.map(n =>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3"><MovieDisplay movie={n.movie} /></div>
        );
    }
}

export default NominationsDisplay;