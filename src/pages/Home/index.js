import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap'
import CardsTop from '../../components/CardsTop/CardsTop'
import CardsMid from '../../components/CardsMid/CardsMid';
import Navbar from '../../components/NavBar/Navbar'
import DataProvider from '../../Services/DataProvider'


function Home() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function getUsuario() {
      const pageAdress = "/pessoa/" + localStorage.getItem('login')
      const newUsuario = await DataProvider.get(pageAdress)
      if (newUsuario) {
        localStorage.setItem('user-name', newUsuario.data.nome)
        setUsuario(newUsuario.data);
      }
    }
    getUsuario();
  }, []);

  if (!usuario) {
    return null
  }

  return (
    <>
      <Navbar nome={usuario.nome} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }} >
        <Container
          style={{
            display: "grid",
            justifyContent: "center"
          }}
        >
          <Row>
            <CardsTop usuario={usuario}></CardsTop>
          </Row>
          <Row>
            <CardsMid usuario={usuario.despesas} title={"Gastos do Mês"}></CardsMid>
            <CardsMid usuario={usuario.receita} title={"Receitas do Mês"}></CardsMid>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
