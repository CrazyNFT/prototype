import React from 'react';
import { Header } from 'semantic-ui-react'
const Base = (
  {

  title ="My Title",
  description ="My Description",
  
  children
  }

) =>{
 return(
      <div >
        <Header as='h2' icon textAlign='center'>
        <Header.Content>{title} 
        </Header.Content>
        </Header>
        
       <Header as='h5' icon textAlign='center'>
       <Header.Content>{description}</Header.Content>
       </Header>
       
       
       </div>
     
 )
   
}


export default Base;

