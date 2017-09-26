import React, { Component } from 'react';

class Card extends Component {
  state = {
    endX: null,
    endY: null,
    index: this.props.index,
    column: null,
    targetbox: null
  }

  setup = {
    originX: null,
    originY: null,
    startX: null,
    startY: null
  }

  dragEnd = (event) => {
    console.log("dragend")
    console.log(this.setup.originX, event.target.offsetLeft, this.setup.originY, event.target.offsetTop)
    this.setState({endX: event.pageX, endY: event.pageY, targetbox: null})
  }

  dragStart = (event) => {
    console.log("this works", event.target.offsetLeft, event.target.offsetTop)
    event.dataTransfer.setData("text", event.target.id)
    if (this.setup.startX === null) {
      this.setup = {originX: event.target.offsetLeft, startX: event.pageX, originY: event.target.offsetTop, startY: event.pageY}
      this.setState({targetbox: true})
    } else {
      this.setup = {originX: event.target.offsetLeft, startX: event.pageX, originY: event.target.offsetTop, startY: event.pageY}
      this.setState({targetbox: true})
    }
  }

  drop = (event) => {
    if (event.target.id) {
      // debugger
      this.props.swap(event.dataTransfer.getData("text"), event.target.id)
      event.dataTransfer.clearData()
    }
  }

  hover = (event) => {
    console.log("hovering")
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
    if (this.state.targetbox === null) {
      return (<div className={this.state.column} id={this.props.title} draggable="true" onDrop={this.drop} onDragStart={this.dragStart} onDragOver={(event) => event.preventDefault()} onDragEnd={this.dragEnd} ><h3>{this.props.title}</h3><p>{this.props.details}</p></div>)
    }
    else {
      console.log(this.state.targetbox)
      const style = {backgroundColor: 'red'}
      // const style = {top: (this.state.endY-this.setup.startY+this.setup.originY)+'px', left: (this.state.endX-this.setup.startX+this.setup.originX)+'px'}
      // return (<div style={style} draggable="true" id={this.props.title} className="card" onDrop={this.drop} onDragStart={this.dragStart} onDragOver={(event) => event.preventDefault()} onDragEnd={this.dragEnd}><h3>{this.props.title}</h3><p>{this.props.details}</p></div>)
      return (<div style={style} className={this.state.column} id={this.props.title} draggable="true" onDrop={this.drop} onDragStart={this.dragStart} onDragOver={(event) => event.preventDefault()} onDragEnd={this.dragEnd} ></div>)
    }
  }

}

export default Card
