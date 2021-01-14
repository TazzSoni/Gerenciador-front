import React from 'react';
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import Tabela from '../../components/Tabela/Tabela'
import Auth from '../../Services/Auth'
import "./Contas.css"

function renderContas(contas) {
  return contas.map(contas => <Tabela key={contas.id} atividade={contas} />)
}

function Contas() {
  let usuario = null
  async function get() {
    usuario = await Auth.get("/pessoa")
    console.log(usuario.data[1].contas)

  }

  get()



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
              <Tabela>
                {//renderContas(usuario.data[1].contas)
                }
              </Tabela>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contas;
