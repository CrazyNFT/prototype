import React from "react";
import { Container, Grid } from "semantic-ui-react";
import NFTCard from "./NFTCard";

const axios = require('axios');
let heroku = () => axios.get('https://crazynft.herokuapp.com/getall.php')
  .then(function (response) {
    // handle success
    console.log(response);
    heroku=response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
  });



const response = async () => await fetch("");
// const db = async () => await response.json();
// const uri = async () => await fetch(`ipfs://${db.uri}`);
// const uridb = async () => await db.json();
// const pic = async () => await fetch(`ipfs://${uridb.nftFile}`);
// const picdb = async () => await pic.json();



const TableMaker = () => {

  // response();
  // console.log(contacts);
  console.log(heroku());
  return (    
    <div style={{ margin: "84px 320px" }}>
      {/* <Grid columns={3} relaxed style={{ margin: "auto" }}>
        <Grid.Row>
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
      </Grid> */}
    </div>
   );
};
export default TableMaker;
