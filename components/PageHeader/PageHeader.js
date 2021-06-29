/* eslint-disable jsx-a11y/alt-text */
import {Dropdown, Menu, Container, Image, Button, Modal, Header, Icon} from "semantic-ui-react";
import React from "react";
import UploadForm from "@/components/UploadForm/UploadForm";
import MetaMask from "@/components/Wallets/MetaMask";

const PageHeader = () => {const [open, setOpen] = React.useState(false); return(
<Menu fixed="top" borderless>
      <Container>
        <Menu.Item as="a" header>
          <h1>CrazyNFT</h1>
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item> 
        <Menu.Item as="a">Contact Us</Menu.Item>        
      </Container>
      
      <Menu.Item as="a" align="right" onClick={()=>MetaMask()}>Connect Wallet</Menu.Item>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Menu.Item as="a" align="right">Upload</Menu.Item>}
      >
        <Modal.Content>
          <UploadForm />
        </Modal.Content>
      </Modal>
      </Menu>
)}
export default PageHeader

// <Button color="teal" onClick={()=>PopUpWindow()}> Upload</Button>