import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import CardContainer from './components/CardContainer'


class App extends Component {
  constructor(props){
    super(props)
    this.swap = this.swap.bind(this)
  }
  state = {
    info: [{title:"potato", details: "blah blah blah"},
      {title:"tomato", details: "red and juicy"},
      {title:"taco", details: "burrito burrito"}],

  }

  drag = (event) => {
    event.preventDefault()
  }

  swap = (title1, title2) => {
    let pos2 = this.state.info.findIndex((object) => {return (object.title === title2)})
    let pos1 = this.state.info.findIndex((object) => {return (object.title === title1)})
    let samplearray = this.state.info
    let temp = this.state.info[pos1]
    samplearray[pos1] = this.state.info[pos2]
    samplearray[pos2] = temp
    this.setState({info: samplearray})
  }

  // sample = [{title:"potato", details: "blah blah blah"},
  //   {title:"tomato", details: "red and juicy"},
  //   {title:"taco", details: "burrito burrito"}]

  render() {
    return (
        <CardContainer swap={this.swap} info={this.state.info} />
    );
  }
}

export default App;
