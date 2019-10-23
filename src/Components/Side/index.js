
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import './style.css';

const Side =(props) => (


<Card className='col-2 pr-0 ml-0 pl-0 border-0 text-center mt-3 align-self-center'>
<Card.Title>

    <ListGroup className="flush" variant="flush shadow">
    

    <ListGroup.Item className='pt-3 p-4'>CHANNELS
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
    
   
   
  </ListGroup>
  </Card.Title>
  </Card>


)

export default Side;