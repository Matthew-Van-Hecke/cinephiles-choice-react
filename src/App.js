import React, { Component } from 'react';
import Axios from 'axios';
import ExploreNominations from './ExploreNominations';
import { groupByCriteria, subGroupByCriteria } from './helperFunctions';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {allNominations: {}};
    this.getAllNominations = this.getAllNominations.bind(this);
  }
  componentDidMount(){
    this.getAllNominations();
  }
  async getAllNominations(){
    let response = await Axios.get("https://localhost:44366/api/Nominations/");
    let sortedResponseData = subGroupByCriteria(groupByCriteria(response.data, "year"), "awardCategory");
    console.log(sortedResponseData);
    this.setState({allNominations: sortedResponseData});
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
