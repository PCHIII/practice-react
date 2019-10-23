import React from 'react';
// import  Navbar  from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl'
import {Navbar, FormControl, InputGroup, Button} from 'react-bootstrap';


const Footer = props => (

   
<Navbar fixed="bottom" className="bg-white border-top shadow-lg" variant="light">

<InputGroup className="mb-0 p-2 pl-5 pr-5">
    <FormControl className= "bg-light"
      placeholder=""
      aria-label="Enter Chat Message"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="secondary border pl-5 pr-5">Send</Button>
    </InputGroup.Append>
  </InputGroup>
 

</Navbar>   
 
)

export default Footer;