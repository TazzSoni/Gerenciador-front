import React from 'react';
import { Row, Container } from 'react-bootstrap'
import CardsTop from '../components/CardsTop/CardsTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardsMid from '../components/CardsMid/CardsMid';


function Home() {
  return (
    <div className="home" >
      <Container className="conatiner">
        <Row>
          <CardsTop saldo="123456"></CardsTop>
        </Row>
        <Row>
          <CardsMid></CardsMid>
          <CardsMid></CardsMid>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
