import React, { useState, useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";
import NFTCard from "./NFTCard";

import NFT from '../../services/models/nft'

const axios = require('axios');
// let heroku = () => axios.get('https://crazynft.herokuapp.com/getall.php')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     heroku=response;
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//   });



const response = async () => await fetch("");
// const db = async () => await response.json();
// const uri = async () => await fetch(`ipfs://${db.uri}`);
// const uridb = async () => await db.json();
// const pic = async () => await fetch(`ipfs://${uridb.nftFile}`);
// const picdb = async () => await pic.json();



const TableMaker = () => {

  const [nftData, setNftData] = useState([])

  useEffect(async () => {
    try {
      let nft = new NFT()
      let data = await nft.getAll()
      console.log('NFT Data ', data)
      if (data) {
        setNftData(data)
      }
    } catch (err) {
      alert('Error! ' + err)
    }
  }, [])

  // response();
  // console.log(contacts);
  // console.log(heroku());
  return (
    <div style={{ margin: "84px 320px" }}>
      {
        nftData && nftData.map((data) => (
          <Grid columns={3} relaxed style={{ margin: "auto" }}>
            <Grid.Row>
              <Grid.Column>
                <NFTCard
                  name={data.nftName}
                  img={'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'} // test
                  details={data.nftDescription}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))
      }

    </div>
  );
};
export default TableMaker;
