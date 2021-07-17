/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import {
  Dropdown,
  Menu,
  Container,
  Image,
  Button,
  Modal,
  Header,
  Icon,
  Grid,
} from "semantic-ui-react";
import React, { useEffect } from "react";
import UploadForm from "@/components/UploadForm/UploadForm";
import MetaMask from "@/components/Wallets/MetaMask";
import SideNav from '@/components/SideNav/SideNav'

const PageHeader = (props) => {
  const [open, setOpen] = React.useState(false);
  const [mobile,setMobile] = React.useState(true);
  // SHOW HEADER STATE
  const [show, setShow] = React.useState("block");

  // WALLET CONNECTED STATUS STATE VARIABLES
  let [connected, setConnectedStatus] = React.useState(false);

  // WALLET CONNECTED ACCOUNT
  let [account, setAccount] = React.useState("");

  // CALL THIS FUNCTION TO TOGGLE WALLET CONNECTED STATUS
  let toggleConnected = async () => {
    setConnectedStatus(connected);
    const accounts = await window.web3.eth.getAccounts();
    if (connected) {
      setAccount(accounts[0]);
    }
  };
  //  var x=true;
  useEffect(()=>{
    // console.log(window.matchMedia("max-width('700px')"))
    setMobile(window.matchMedia("max-width('700px')").matches)
  })
  return (
    <>
    <SideNav visibility={props.visibility} togglesidebar={props.togglesidebar}></SideNav>
      <Menu stackable fixed="top" borderless>
        <Container>
          <h1 style={{ margin: 10 }}>
            <Image
              src="/logo.png"
              alt="CrazyNFT"
              width="75"
              height="41.528"
              centered
            ></Image>
          </h1>
          <Link href="/">
            <Menu.Item 
            style={{display:!mobile?(props.visibility?'flex':'none'):'none'}}
            as="a">
              Home
            </Menu.Item>
          </Link>
          <Link href="marketplace">
            <Menu.Item
            style={{display:!mobile?(props.visibility?'flex':'none'):'none'}}
             >Marketplace</Menu.Item>
          </Link>
          <Menu.Item 
            style={{display:!mobile?(props.visibility?'flex':'none'):'none'}}
            className="headerMenus" as="a">
            Contact Us
          </Menu.Item>
        </Container>

        <Menu.Item
            style={{display:!mobile?(props.visibility?'flex':'none'):'none'}}
          as="a"
          align="right"
          onClick={async () => {
            connected = await MetaMask();
            toggleConnected();
          }}
        >
          {connected ? `Connected to: ${account.substring(0,6)+"..."+account.substring(account.length-4)}` : "Connect Wallet"}
        </Menu.Item>
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size="small"
          trigger={
            <Menu.Item 
            style={{display:!mobile?(props.visibility?'flex':'none'):'flex'}}
             as="a" align="right">
              Upload
            </Menu.Item>
          }
        >
          <Modal.Content>
            <UploadForm/>
          </Modal.Content>
        </Modal>
        <Menu.Item
          className="headerMenus"
          style={{ width: "60px" }}
          as="div"
          align="right"
        ></Menu.Item>
      </Menu>
    </>
  );
};
export default PageHeader;

// <Button color="teal" onClick={()=>PopUpWindow()}> Upload</Button>
