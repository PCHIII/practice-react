
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import './style.css';

const Sideright =(props) => (

<Card className='col-2 border-0 text-left mt-5 mr-0'>
<Card.Title>

    <ListGroup className="flush" variant="flush shadow">
    

        <ListGroup.Item className='pt-3 text-center'>MEMBER
        </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
        Primary</ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Secondary
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Success
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Danger
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Warning
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Info
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      Light
    </ListGroup.Item>
    <ListGroup.Item  variant="light border-0">
      
    </ListGroup.Item>
    <ListGroup.Item  variant="light border-0">
      
    </ListGroup.Item>
    <ListGroup.Item  variant="light border-0">
      
    </ListGroup.Item>
    <ListGroup.Item variant="light border-0">
      
    </ListGroup.Item>
   
    
         

        
        
        
  </ListGroup>
  </Card.Title>
  </Card>

)

export default Sideright;