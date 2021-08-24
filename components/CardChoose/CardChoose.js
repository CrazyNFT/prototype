import React from "react";
import { Container, Button } from "semantic-ui-react";
import {
  createCard,
  getBalance,
  sendTransaction,
  withdrawTransaction,
} from "./Circle";
// import BuyForm from "../BuyForm/BuyForm"
// import account from "../PageHeader/PageHeader"
// import Card from "react-credit-cards";

const CardChoose = () => {
  const btnStyle = { margin: "10px", minWidth: "200px" };

  return (
    <Container>
      <Button onClick="createCard();" style={{ ...btnStyle }}>
        Create a new card
      </Button>
      <Button onClick="sendTransaction();" style={{ ...btnStyle }}>
        Send Money
      </Button>
      <Button onClick="getBalance();" style={{ ...btnStyle }}>
        Get Account balance
      </Button>
      <Button onClick="withdrawTransaction();" style={{ ...btnStyle }}>
        Withdraw Transaction
      </Button>
    </Container>
  );
};
export default CardChoose;
