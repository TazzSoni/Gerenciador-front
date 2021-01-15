import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import Tabela from '../../components/Tabela/Tabela'
import DataProvider from '../../Services/DataProvider'
import "./Contas.css"
import CrudContas from '../../components/Modal/CrudContas';
import { GiPayMoney } from "react-icons/gi";




function Contas() {
  const [contas, setContas] = useState(null);

  useEffect(() => {
    async function getContas() {
      const pageAdress = "/conta/" + localStorage.getItem('login')
      const newContas = await DataProvider.get(pageAdress)
      setContas(newContas.data);
    }
    getContas();
  }, []);

  function renderContas() {
    if (!contas) {
      return null
    }
    return contas.map(conta => <Tabela key={conta.id} conta={conta} />)
  }

  return (
    <>
      <Navbar />
      <Container fluid="sm" className="cont">
        <Row>
          <Col className="titulo">
            <label id="label">Contas</label>
            <GiPayMoney size={50} className="iconCard"></GiPayMoney>
          </Col>
          <Col ></Col>
          <Col ></Col>
          <Col >
            <Button variant="outline-info" id="bt3">Excluir</Button>
            <Button variant="outline-info" id="bt2">Editar</Button>
            <CrudContas></CrudContas>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover variant="info">
              <thead>
                <tr>
                  <th><Form.Check disabled type="checkbox" /></th>
                  <th>Descrição</th>
                  <th>Data</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {renderContas()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contas;
