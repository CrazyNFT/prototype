import React from "react";
import contacts from "@/components/extras/contacts";
import Card from "@/components/Retrieve/Card";
import { Grid } from 'semantic-ui-react'


export default function Retrieve() {
  return (
    // <div>
        <Grid centered container> 
          <Grid.Row columns={3}>
        {contacts.map((ele,index) => {
          return (
            <Grid.Column>
              <Card key={index} name={ele.name} img={ele.imgURL} details={ele.details} />
            </Grid.Column>
          );
        })}
        </Grid.Row>
        </Grid>
    // </div>
  );
}
