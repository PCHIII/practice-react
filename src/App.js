import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/index";
import Top from "./Components/Top/index";
import Side from "./Components/Side/index";
import Chat from "./Components/Chat/index";
import CardDeck from 'react-bootstrap/CardDeck';
import Sideright from "./Components/Sideright/index";
import React from 'react';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (

     
  <div className="App">
     <Top /> 
     
      <CardDeck className="pt-2 mt-5 size mx-auto">
      <Side>
        <ul className="channel-list">
        <li />
        <li />
        </ul>

        </Side>
        <Chat /><Sideright />

      
      </CardDeck>
        <Footer />  
       
 </div>
    
  );
}

export default App;
