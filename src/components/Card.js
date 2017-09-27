import React, { Component } from 'react';

class Card extends Component {
  state = {
    index: this.props.index,
    targetbox: null
  }

  cssGrid = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
  }

  dragEnd = (event) => {
    this.setState({targetbox: null})
  }

  dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id)
    this.setState({targetbox: true})
  }

  drop = (event) => {
    if (event.target.id) {
      this.props.swap(event.dataTransfer.getData("text"), event.target.id)
      event.dataTransfer.clearData()
    }
  }

  render(){
    if (this.state.targetbox === null) {
      return (<div className={this.cssGrid[this.state.index]} id={this.props.title} draggable="true" onDrop={this.drop} onDragStart={this.dragStart} onDragOver={(event) => event.preventDefault()} onDragEnd={this.dragEnd} ><h3>{this.props.title}</h3><p>{this.props.details}</p></div>)
    }
    else {
      const style = {backgroundColor: 'red'}
      return (<div style={style} className={this.cssGrid[this.state.index]} id={this.props.title} draggable="true" onDrop={this.drop} onDragStart={this.dragStart} onDragOver={(event) => event.preventDefault()} onDragEnd={this.dragEnd} ></div>)
    }
  }

}

export default Card
