import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import './sidesmall.css';

const Sidesmall =(props) => (


<Card className='col-1 pr-0 ml-0 pl-0 mr-0 text-center mt-4 pt-2' bg="dark">
<Card.Title>

    <ListGroup className="flush" variant="flush">
    

    <ListGroup.Item action variant="light border-0 mt-2 p-3"> +
        </ListGroup.Item>
    <ListGroup.Item action variant="primary border-0">
        P</ListGroup.Item>
    <ListGroup.Item action variant="dark border-0">
      S
    </ListGroup.Item>

    <ListGroup.Item action variant="secondary border-0">
      S
    </ListGroup.Item>
    <ListGroup.Item action variant="danger border-0">
      D
    </ListGroup.Item>
    <ListGroup.Item action variant="warning border-0">
      W
    </ListGroup.Item>
    <ListGroup.Item action variant="info border-0">
      I
    </ListGroup.Item>
    <ListGroup.Item action variant="light border-0">
      L
    </ListGroup.Item>
    
   
   
  </ListGroup>
  </Card.Title>
  </Card>


)

export default Sidesmall;