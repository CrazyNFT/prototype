import { Card, Icon, Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'


const Card1 = () => {
    return (
       <div className="mydiv">
        <Container>
        <Grid columns={3} divided   >
          
        <Header as='h2' icon textAlign='center' >
             
              <Header.Content>On the mission to bring <br/>
              NFTs to the mainstream</Header.Content>
              </Header>
             <Header as='h5' icon textAlign='center'>
             <Header.Content>
             Airnfts is the NFT marketplace built on Binance Smart Chain focusing
             highly on user experience and ease of use to Create, Buy, Sell and use NFTs.
             </Header.Content>
            </Header>
        
        
            <Grid.Row>
              
              <Grid.Column>
              <Card
            image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            header='Create NFT with ease'
           
            description='One click and your NFT is created. Set a price and start earning, NFT auction will come next.'
            /></Grid.Column>
              
              <Grid.Column>
              <Card
            image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            header='AIRT Farming & Royalties'
           
            description='You can earn AIRT Token for selling and buying NFTs. Use royalties for secondary sales.'
            
          /></Grid.Column>
        
         <Grid.Column>
              <Card
            image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            header='NFT Launchpad'
           
            description='For those artists that don&apos;t have big following there will be launchpad to give exposure.'
            /></Grid.Column>
           </Grid.Row>
          </Grid>
       
          </Container>
          </div>
          
      );
}
 
export default Card1;