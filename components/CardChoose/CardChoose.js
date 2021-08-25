import React from "react";
import Link from "next/link";
import { Container, Button, Icon } from "semantic-ui-react";
import { getBalance } from "./Circle";

const CardChoose = () => {
  const btnStyle = { margin: "10px", minWidth: "200px" };
  const [show, setShow] = React.useState(false);
  const [balance, setBalance] = React.useState("0.0");

  React.useEffect(() => {
    getBalance().then((res) => {
      const available = res.data.available[0];
      setBalance(available.amount + " " + available.currency);
    });
  });

  return (
    <Container>
      <Link href="/circle/add-card">
        <Button style={{ ...btnStyle }}>Create a new card</Button>
      </Link>
      <Link href="/circle/payment">
        <Button style={{ ...btnStyle }}>Send Money</Button>
      </Link>
      <Button style={{ ...btnStyle }} onClick={() => setShow(true)}>
        Get Account balance
      </Button>
      {show && (
        <div
          style={{
            ...btnStyle,
            color: "black",
            padding: "8px",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "200px",
            margin: "8px auto",
            borderRadius: "4px",
            border: "1px solid",
          }}
        >
          <span>{balance}</span>
          <Icon name="close" onClick={() => setShow(false)} />
        </div>
      )}
      <Link href="/circle/withdraw">
        <Button style={{ ...btnStyle }}>Withdraw Transaction</Button>
      </Link>
    </Container>
  );
};
export default CardChoose;
