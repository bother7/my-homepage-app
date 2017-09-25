import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer'
import { Grid } from 'semantic-ui-react'


class App extends Component {

  sample = [{title:"potato", details: "blah blah blah"},
    {title:"tomato", details: "red and juicy"},
    {title:"taco", details: "burrito burrito"}]

  render() {
    return (
      <div className="App">
        <CardContainer info={this.sample} />
      </div>
    );
  }
}

export default App;
