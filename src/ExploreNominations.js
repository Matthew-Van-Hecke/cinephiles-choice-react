import React, { Component } from 'react';

class ExploreNominations extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let yearsAndCategories = this.props.yearsAndCategories;
        let years = Object.keys(yearsAndCategories);
        let content = [];
        for (let i = 0; i < years; i++){
            content.push(
                <div id={"nominations" + years[i]}>
                    <h4 className="ExploreNominations-year">{years[i]}</h4>
                </div>
            )
        }
        return(
            <div className="ExploreNominations">
                <h1>Explore Nominations</h1>
                {content}
            </div>
        )
    }
}

export default ExploreNominations;