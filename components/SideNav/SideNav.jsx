import React from 'react'
import {Menu,Sidebar,Button,Icon, Image,Label } from 'semantic-ui-react'
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
    <Button className="sidebarToggle" basic color="black" icon="bars" onClick={props.togglesidebar}></Button>
     <div className="sidebar">
       
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      // inverted
      className='sidebarAdminPanel'
      direction='right'
      vertical
      visible={props.visibility}
      width='thin'
      primary
    >
      
      <Menu.Item color="red" as='div'>
        <b>CRAZY NFTs</b>
      </Menu.Item>
      <Menu.Item as='a' onClick={scrollToHome}>
        Home
      </Menu.Item>
      {/* <Menu.Item as='a' onClick={scrollToBlog}>
        Blogs
      </Menu.Item> */}
      <Menu.Item as='a' onClick={scrollToAboutUs}>
        About Us
      </Menu.Item>   
      <Menu.Item as='a' onClick={scrollToContactUs}>
        Contact Us
      </Menu.Item>      
    </Sidebar>
    </div>
    </>
    )
}

export default SideNav;