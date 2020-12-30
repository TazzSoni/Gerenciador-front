import React from 'react';
import { Row, Container } from 'react-bootstrap'
import CardsTop from '../components/CardsTop/CardsTop'
import CardsMid from '../components/CardsMid/CardsMid';
import Navbar from '../components/NavBar/Navbar'


function Home() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default Home;
