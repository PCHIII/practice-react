import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const Top = (props) => (

  <Navbar fixed="top" bg="light p-3 border-bottom shadow" variant="light">
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