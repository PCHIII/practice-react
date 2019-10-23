import React from 'react';
import Nav from 'react-bootstrap/Nav'
import  Navbar  from 'react-bootstrap/Navbar';

const Top = (props) => (


<Navbar fixed="top"  bg="white p-3 justify-items-center border-bottom shadow-sm" variant="light">
 <Nav defaultActiveKey="/home" as="ul">
   
 <Nav.Item as="li" className='pr-5'>
  <Nav.Link href="/home">APP NAME</Nav.Link>
</Nav.Item>

<Nav.Item as="li" className='pr-5'>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
   <Nav.Link eventKey="link-2">Link</Nav.Link>
 </Nav.Item>

</Nav>
</Navbar>

)

export default Top;