import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

import { Grid, } from 'semantic-ui-react'
import Base from './base'


const CardComponent = () => {
    return(
   <div className="mydiv"> 

<Grid columns={3} divided className = "container">
  
     <Header as='h1' icon textAlign='center'>
     <Header.Content>How to create an NFT on BSC</Header.Content>
     </Header>
    


    <Grid.Row>
      
      <Grid.Column>
      <Card
    image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
    header='1. Connect your wallet'
    meta='Friend'
    description='Use Trust Wallet or Metamask to connect to the app'
    /></Grid.Column>
      
      <Grid.Column>
      <Card
    image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
    header='2. Create your NFT'
    meta='Friend'
    description='Upload your NFTs and set the price Accordingly '
    
  /></Grid.Column>

 <Grid.Column>
      <Card
    image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
    header='3. Start earning BNB'
    meta='Friend'
    description='Earn BNB and AIRT for all your NFTs that you sell'
    /></Grid.Column>
   </Grid.Row>
  </Grid>
  </div>
    
    )
}

export default CardComponent
