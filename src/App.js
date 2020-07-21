import React, { Component } from 'react';
import Axios from 'axios';
import ExploreNominations from './ExploreNominations';
import { groupByCriteria, subGroupByCriteria } from './helperFunctions';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {allNominations: {}, yearsAndCategories: {}};
    this.getAllNominations = this.getAllNominations.bind(this);
  }
  componentDidMount(){
    this.getAllNominations();
  }
  async getAllNominations(){
    let response = await Axios.get("https://localhost:44366/api/Nominations/");
    let sortedResponseData = subGroupByCriteria(groupByCriteria(response.data, "year"), "awardCategory");
    let yearsAndCategories = this.reduceNominationsToYearsAndCategories(sortedResponseData);
    console.log(yearsAndCategories);
    this.setState({allNominations: sortedResponseData, yearsAndCategories: yearsAndCategories});
  }
  reduceNominationsToYearsAndCategories(object){
    let reduced = {};
    let keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++){
      let categoryList = Object.keys(object[keys[i]]);
      reduced[keys[i]] = categoryList;
    }
    return reduced;
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <ExploreNominations />
        </div>
  
      </div>
    );
  }
}

export default App;
