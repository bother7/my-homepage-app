import React, { Component } from 'react';

class Card extends Component {
  state = {
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    index: this.props.index,
    column: null
  }

  dragEnd = (event) => {
    console.log("this works")
    this.setState({endX: event.pageX, endY: event.pageY})
  }
  dragStart = (event) => {
    console.log("this works", event.target.offsetLeft, event.target.offsetTop)
    if (this.state.startX === null) {
        this.setState({startX: event.target.offsetLeft, startY: event.target.offsetTop})
    } else {
      this.setState({startX: event.pageX, startY: event.pageY})
    }
  }


  componentDidMount() {
    if (this.state.index === 1) {
      this.setState({column: "one"})
    } else if (this.state.index === 2) {
        this.setState({column: "two"})
    } else if (this.state.index === 3){
        this.setState({column: "three"})
    }
  }

  render(){
    if (this.state.startX === null && this.state.endX === null) {
      return (<div className={this.state.column} draggable="true" onDragStart={this.dragStart} onDragEnd={this.dragEnd}><h3>{this.props.title}</h3><p>{this.props.details}</p></div>)
    }
    else {
      const style = {top: (this.state.endY-this.state.startY)+'px', left: (this.state.endX-this.state.startX)+'px'}
      return (<div style={style} draggable="true" className="card" onDragStart={this.dragStart} onDragEnd={this.dragEnd}><h3>{this.props.title}</h3><p>{this.props.details}</p></div>)
    }
  }

}

export default Card
