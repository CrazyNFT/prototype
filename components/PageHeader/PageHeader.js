/* eslint-disable jsx-a11y/alt-text */
import {Dropdown, Menu, Container, Image} from "semantic-ui-react";
import React from "react";
import PopUpWindow from "../PopUpWindow/PopUpWindow";

const PageHeader = () => (
<Menu fixed="top" borderless>
      <Container>
        <Menu.Item as="a" header>
          <h1>CrazyNFT</h1>
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item> 
        <Menu.Item as="a">Contact Us</Menu.Item>        
      </Container>
      
      <Menu.Item as="a" align="right">Connect Wallet</Menu.Item>
      <PopUpWindow/>
    </Menu>
)
export default PageHeader