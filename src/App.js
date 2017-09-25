import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer'


class App extends Component {

  drag = (event) => {
    event.preventDefault()
  }

  sample = [{title:"potato", details: "blah blah blah"},
    {title:"tomato", details: "red and juicy"},
    {title:"taco", details: "burrito burrito"}]

  render() {
    return (
        <CardContainer info={this.sample} />
    );
  }
}

export default App;
