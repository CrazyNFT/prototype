import React from "react";
import { Container, Grid } from "semantic-ui-react";
import NFTCard from "./NFTCard";
import contacts from "../extras/contacts";

const TableMaker = () => {
  return (
    // <div style={{ margin: "84px 320px" }}>
      <Grid centered container stackable doubling style={{ marginTop: "7em", textAlign: "center" }}>
        
      <br></br>
      <br></br>
        <Grid.Row columns={3}>
          {contacts.map((ele,idx)=>{
            return(
          <Grid.Column>
            <NFTCard
              name={ele.name}
              img={ele.imgURL}
              details={ele.details}
            />
          </Grid.Column>
            )
          
          })
        }
        </Grid.Row>
      </Grid>
    // </div>
  );
};
export default TableMaker;
