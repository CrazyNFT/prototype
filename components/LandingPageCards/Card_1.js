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
             
              <Header.Content>When exressing your creativity is free, <br/>
              why should gas and transaction fee stop you?</Header.Content>
              </Header>
             <Header as='h5' icon textAlign='center'>
             <Header.Content>
             CrazyNFT is the first NFT marketplace, which allows you to create and mint NFTs for free. <br />Built with love, from India, on Polygon
             </Header.Content>
            </Header>
        
        
            <Grid.Row>
              
              <Grid.Column>
              <Card
            image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            header='Create NFTs for free'
           
            description='One click, no fee or gas, just create your NFTs and later give us a part from the profit you make'
            /></Grid.Column>
              
              <Grid.Column>
              <Card
            image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            header='Earn CRZY Tokens!'
           
            description='For every successful Sale/Purchase or Premium listing, get CRZY tokens airdropped into your wallet'
            
          /></Grid.Column>
        
         <Grid.Column>
              <Card
            image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            header='Get your own marketplace!'
           
            description='Create your own collectibles section, and make your arts globally recognized'
            /></Grid.Column>
           </Grid.Row>
          </Grid>
       
          </Container>
          </div>
          
      );
}
 
export default Card1;