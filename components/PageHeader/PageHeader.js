/* eslint-disable jsx-a11y/alt-text */
import {Dropdown, Menu, Container, Image} from "semantic-ui-react";
import React from "react";

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
    </Menu>
)
export default PageHeader