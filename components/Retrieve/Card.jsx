import React from "react";
import { Button } from 'semantic-ui-react'

function Card(props) {
  return (
    <div className="card">
      <h5>{props.name}</h5>
      <img className="circle-img" src={props.img} alt="avatar_img" />
      <p className="info">{props.details}</p>
      <Button primary color={"blue"}>
        Buy Now
        </Button>
    </div>
  );
}

export default Card;
