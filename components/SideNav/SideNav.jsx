import React from 'react'
import {Menu,Sidebar,Button,Icon, Image,Label, Grid } from 'semantic-ui-react'
// import {NavLink, useHistory} from 'react-router-dom'


let openLink = (url) => {
  window.open(url, '_blank');
}
const SideNav = (props) => {
  // let history = useHistory();
  function scrollToHome(){
    // history.push('/');  
    //TODO
  }
  function scrollToAboutUs(){
    // history.push('/aboutus');
        //TODO

  }
  function scrollToContactUs(){
    // history.push('/contactus');
        //TODO

  }
   return(
     <>
     <Grid>
       <Grid.Column>
    <Button className="sidebarToggle" basic color="black" icon="bars" onClick={props.togglesidebar}></Button>
    </Grid.Column>
    </Grid>
     <div className="sidebar">
       
    {/* <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      // inverted
      className='sidebarAdminPanel'
      direction='right'
      vertical
      // visible={props.visibility}
      width='thin'
      primary
    >
      
      <Menu.Item color="red" as='div'>
        <b>CRAZY NFTs</b>
      </Menu.Item>
      <Menu.Item as='a' 
      href="/"
      >
        Home
      </Menu.Item>
      <Menu.Item as='a' 
      href="/marketplace"
      >
        Marketplace
      </Menu.Item>
      <Menu.Item as='a' 
      href="/contactus"
      >
        Contact Us
      </Menu.Item>
    </Sidebar> */}
    </div>
    </>
    )
}

export default SideNav;