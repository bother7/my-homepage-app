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
    info: [{title:"1. potato", details: "blah blah blah"},
      {title:"2. tomato", details: "red and juicy"},
      {title:"3. taco", details: "burrito burrito"},
      {title:"4. oregano", details: "spicy"},
      {title:"5. oranges", details: "are orange"},
      {title:"6. Trash", details: "Trashy"}
    ],

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

  render() {
    return (
        <CardContainer swap={this.swap} info={this.state.info} />
    );
  }
}

export default App;
