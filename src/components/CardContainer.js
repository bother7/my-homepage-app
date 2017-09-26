import React from 'react';
import Card from './Card';

const CardContainer = (props) => {
  return (<div className="wrapper" onDragOver={props.drag}>
  {props.info.map((blurb, index) => {return <Card title={blurb.title} swap={props.swap} index={index+1} details={blurb.details}/>})}
  </div>)
}


export default CardContainer
