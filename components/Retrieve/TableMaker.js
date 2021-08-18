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
        nftData && nftData.map((data, index) => (
          <Grid columns={3} relaxed style={{ margin: "auto" }} key={index}>
            <Grid.Column>
              <Grid.Row>
                <NFTCard
                  name={data.nftName}
                  img={'https://ipfs.io/ipfs/'+data.hash} // test
                  details={data.nftDescription}
                />
              </Grid.Row>
            </Grid.Column>
          </Grid>
        ))
      }

    </div>
  );
};
export default TableMaker;
