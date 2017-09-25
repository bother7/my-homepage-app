import React from 'react';
import Card from './Card';

const CardContainer = (props) => {
  return (<div className="ui cards">
  {props.info.map((blurb) => {return <Card title={blurb.title} details={blurb.details}/>})}
  </div>)
}


export default CardContainer
