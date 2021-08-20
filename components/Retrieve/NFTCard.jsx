import React from "react";
import { Button, Image, Modal, Grid, Container } from "semantic-ui-react";
import contacts from "../extras/contacts";
import CardChoose from "../CardChoose/CardChoose";


function NFTCard(props) {
  const [open, setOpen] = React.useState(false);
  function BuyFormModal(){
    return(
      <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
          trigger={
            <Button primary color={"blue"} onClick={BuyFormModal}>
              Buy Now
            </Button>
          }
        >
          <Modal.Content>
          <div className="card" style={{ margin: "auto", backgroundColor: "white" }}>
          <container>
            <Grid textAlign="center" verticalAlign="middle">
               <CardChoose />
            </Grid>
          </container>
          </div>
          </Modal.Content>
        </Modal>
    )
  }
  return (
    <div className="card" style={{ margin: "auto" }}>
      <h5>{props.name}</h5>
      <container>
        <Image
          className="circle-img"
          src={props.img}
          alt="avatar_img"
          centered
          rounded
        />
      </container>
      <p className="info">{props.details}</p>
      {BuyFormModal()}
    </div>
  );
}

export default NFTCard;

