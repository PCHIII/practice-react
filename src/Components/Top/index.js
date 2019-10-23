import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './top.css';

const Top = (props) => (

  <Navbar className="topbar p-4 border-bottom" bg="secondary" fixed="top" variant="dark">
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-primary">Search</Button>
  </Form>
</Navbar>
)

export default Top;