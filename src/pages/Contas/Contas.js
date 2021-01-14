import React from 'react';
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import "./Contas.css"

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
            <Button variant="outline-info" id="col3">Excluir</Button>
            <Button variant="outline-info" id="col2">Editar</Button>
            <Button variant="success" id="col1">Adicionar</Button>
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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contas;
