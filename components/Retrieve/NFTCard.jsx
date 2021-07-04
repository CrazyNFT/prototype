import React from "react";
import { Button, Image } from 'semantic-ui-react'
import contacts from "../extras/contacts"

function NFTCard(props) {
  return (
    <div className="card" >
      <h5>{props.name}</h5>
      <container>
      <Image className="circle-img" src={props.img} alt="avatar_img" centered rounded />
      </container>
      <p className="info">{props.details}</p>
      <Button primary color={"blue"}>
        Buy Now
        </Button>
    </div>
  );
}

export default NFTCard;
