import React, { Component } from 'react';
import { groupByCriteria, subGroupByCriteria } from './helperFunctions';
import Axios from 'axios';

class ExploreNominations extends Component{
    constructor(props){
        super(props);
        this.state = {
            allNominations: {}
        }
        this.getAllNominations = this.getAllNominations.bind(this);
    }
    componentDidMount(){
        this.getAllNominations();
    }
    render(){
        return(
            <h1>Explore Nominations</h1>
        )
    }
    async getAllNominations(){
        let response = await Axios.get("https://localhost:44366/api/Nominations/");
        let data = response.data;
        let years = data.map(n => n.year);
        console.log(subGroupByCriteria(groupByCriteria(data, "year"), "awardCategory"));
        // let response = await Axios.get("https://localhost:44366/api/Home/", {headers: {"Access-Control-Allow-Origin": "*"}});
        // console.log(Axios.get("https://localhost:44366/api/Nominations/", {headers: {"Access-Control-Allow-Origin": "*"}}));
        // Axios.get("https://localhost:44366/api/Nominations").then(nominations => console.log(nominations));
    }
}

export default ExploreNominations;