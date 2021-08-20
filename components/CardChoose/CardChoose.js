import React, {useContext} from "react";
import Card from "react-credit-cards";
import { Container, Image, Button, Modal } from "semantic-ui-react";
import BuyForm from "../BuyForm/BuyForm"
import account from "../PageHeader/PageHeader"

const CardChoose =()=>{
    return(
    <Container >
    <Button onClick="createCard();" style={{margin:"10px"}}>Create a new card</Button>
    <Button onClick="sendTransaction();" style={{margin:"10px"}}>Send Money</Button>
    <Button onClick="getBalance();" style={{margin:"10px"}}>Get Account balance</Button>
    <Button onClick="withdrawTransaction();" style={{margin:"10px"}}>Withdraw Transaction</Button>
    </Container>
);
}
export default CardChoose