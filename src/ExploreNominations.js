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
        let sortedResponseData = subGroupByCriteria(groupByCriteria(response.data, "year"), "awardCategory");
        console.log(sortedResponseData);
        this.setState({allNominations: sortedResponseData});
    }
}

export default ExploreNominations;