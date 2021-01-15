import React from 'react';
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import Tabela from '../../components/Tabela/Tabela'
import Auth from '../../Services/Auth'
import "./Contas.css"

async function renderContas() {
  var usuario = await Auth.get("/conta/rod")
  usuario = usuario.data
  const teste = usuario.map(conta => <Tabela key={conta.id} contas={conta} />)
  console.log(teste)
  return usuario.map(conta => <Tabela key={conta.id} contas={conta} />)
}

function Contas() {
  return (
    <>
      <Navbar />
      <Container fluid="sm" className="cont">
        <Row>
          <Col className="titulo">
            <label id="label">Contas</label>
          </Col>
          <Col >
            <Button variant="outline-info" id="bt3">Excluir</Button>
            <Button variant="outline-info" id="bt2">Editar</Button>
            <Button variant="success" id="bt1">Adicionar</Button>
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
