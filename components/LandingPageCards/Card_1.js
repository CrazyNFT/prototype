import { Card, Icon, Image } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

const howto = [
  { image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
  header:'Create NFTs for free',
  description:'One click, no fee or gas, just create your NFTs and later give us a part from the profit you make',
 },
  { 
    image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    header:'Earn CRZY Tokens!',
    description:'For every successful Sale/Purchase or Premium listing, get CRZY tokens airdropped into your wallet',
    },
  { 
    image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    header:'Get your own marketplace!',
    description:'Create your own collectibles section, and make your arts globally recognized',
     }
]

const features =[
  {
    image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
  header:'1. Connect your wallet',
  description:'Use Metamask to connect to the app',
  },
  {
    image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    header:'2. Create your NFT',
    description:'Upload your NFTs and set the price Accordingly ',
  },
  {
    image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    header:'3. Start earning CRZY and MATIC',
    description:'Earn CRZY and MATIC for all your NFTs that you sell',
  }
]

const Card1 = () => {
    return (
       <div className="mydiv">
        <Container>
        <Grid centered stackable columns={3}>
          
        <Header as='h2' icon textAlign='center' >
             
              <Header.Content>When exressing your creativity is free, <br/>
              why should gas and transaction fee stop you?</Header.Content>
              </Header>
             <Header as='h5' icon textAlign='center'>
             <Header.Content>
             CrazyNFT is the first NFT marketplace, which allows you to create and mint NFTs for free. <br />Built with love, from India, on Polygon
             </Header.Content>
            </Header>
        
        
            <Grid.Row centered>
              {howto.map((ele)=>(
              <Grid.Column>
              <Card centered
            image={ele.image}
            header={ele.header}
            description={ele.description}
            /></Grid.Column>)
            )
              } 
           </Grid.Row>
           <Header as='h1' icon textAlign='center'>
     <Header.Content>How to create a NFT on CrazyNFT?</Header.Content>
     </Header>
    


    <Grid.Row centered>
      {features.map((ele)=>{
        return(
      <Grid.Column>
      <Card centered
    image={ele.image}
    header={ele.header}
    description={ele.description}
    /></Grid.Column>)
  }
    )
}
   </Grid.Row>
          </Grid>
       
          </Container>
          </div>
          
      );
}
 
export default Card1;