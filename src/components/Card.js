import React, { Component } from 'react';

class Card extends Component {
  state = {
    endX: null,
    endY: null,
    index: this.props.index,
    column: null
  }

  setup = {
    startX: null,
    startY: null
  }

  dragEnd = (event) => {
    console.log(this.setup)
    this.setState({endX: event.pageX, endY: event.pageY})
  }
  dragStart = (event) => {
    console.log("this works", event.target.offsetLeft, event.target.offsetTop)
    if (this.setup.startX === null) {
        this.setup = {startX: (event.target.offsetLeft + event.pageX), startY: (event.target.offsetTop+event.pageY)}
    } else {
      this.setup = {startX: (event.target.offsetLeft + event.pageX), startY: (event.target.offsetTop+event.pageY)}
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
    if (this.setup.startX === null && this.state.endX === null) {
      return (<div className={this.state.column} draggable="true" onDragStart={this.dragStart} onDragEnd={this.dragEnd}><h3>{this.props.title}</h3><p>{this.props.details}</p></div>)
    }
    else {
      const style = {top: (this.state.endY-this.setup.startY)+'px', left: (this.state.endX-this.setup.startX)+'px'}
      return (<div style={style} draggable="true" className="card" onDragStart={this.dragStart} onDragEnd={this.dragEnd}><h3>{this.props.title}</h3><p>{this.props.details}</p></div>)
    }
  }

}

export default Card
