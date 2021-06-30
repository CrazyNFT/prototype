/* eslint-disable jsx-a11y/alt-text */
import {Dropdown, Menu, Container, Image, Button, Modal, Header, Icon} from "semantic-ui-react";
import React, { useEffect } from "react";
import UploadForm from "@/components/UploadForm/UploadForm";
import MetaMask from "@/components/Wallets/MetaMask";

const PageHeader = (props) => {
  const [open, setOpen] = React.useState(false);

  // SHOW HEADER STATE
  const [show, setShow] = React.useState("block");

  // WALLET CONNECTED STATUS STATE VARIABLES
  const [connected,setConnectedStatus] = React.useState(false);

  // CALL THIS FUNCTION TO TOGGLE WALLET CONNECTED STATUS
  let toggleConnected = () =>{
    setConnectedStatus(!connected)
  }
  
  
 return(
   <>
<Menu stackable fixed="top" borderless>
      <Container>
        <Menu.Item as="a" header>
          <h1>CrazyNFT</h1>
        </Menu.Item>
        <Menu.Item className="headerMenus" as="a">Home</Menu.Item> 
        <Menu.Item className="headerMenus" as="a">Contact Us</Menu.Item>               
      </Container>
      
      <Menu.Item  className="headerMenus"  as="a" align="right" onClick={()=>MetaMask()}>
        {connected?"Disconnect Wallet":"Connect Wallet"}
        </Menu.Item>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Menu.Item  className="headerMenus"  as="a" align="right">Upload</Menu.Item>}
      >
        <Modal.Content>
          <UploadForm />
        </Modal.Content>
      </Modal>
      <Menu.Item  className="headerMenus"  style={{width:'60px'}} as="div" align="right"></Menu.Item>
      
      </Menu>
      </>
)}
export default PageHeader

// <Button color="teal" onClick={()=>PopUpWindow()}> Upload</Button>