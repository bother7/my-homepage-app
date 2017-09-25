import React, { Component } from 'react';

class Card extends Component {
  state = {
    x: null,
    y: null
  }

  transformable = (event) => {
    console.log("this works")
    this.setState({x: event.pageX, y: event.pageY})
  }

  render(){
    return (<div className="card" key={this.props.title} onClick={this.transformable}><h3>{this.props.title}</h3><p>{this.props.details}</p></div>)
  }

}

export default Card
