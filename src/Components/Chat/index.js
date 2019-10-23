import React from 'react';
import Card  from 'react-bootstrap/Card';

import './style.css';

const Chat = (props) => (


    <Card className= 'col-8 p-3 chat border-0 align-self-center'>
       
      
<p className='response1'>
<strong>John says - </strong> Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.
</p>

<p className='response ml-3'>
<strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.  
</p>
<p className='response1'>
<strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
</p>

<p className='response ml-3 '>
<strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text.  
</p>
<p className='response1'>
<strong>John says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text. 
</p>

<p className='response ml-3'>
<strong>Kate says - </strong>Contrary to popular belief, Lorem Ipsum is not simply random text.  
</p>

    </Card>
)

export default Chat;