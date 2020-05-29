import React from 'react';
import MovieDisplay from './MovieDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"><MovieDisplay/></div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"><MovieDisplay/></div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"><MovieDisplay/></div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"><MovieDisplay/></div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"><MovieDisplay/></div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"><MovieDisplay/></div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"><MovieDisplay/></div>
      </div>

    </div>
  );
}

export default App;
