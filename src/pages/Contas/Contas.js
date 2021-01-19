import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import DataProvider from '../../Services/DataProvider'
import "./Contas.css"
import CrudContas from '../../components/Modal/CrudContas';
import { GiPayMoney } from "react-icons/gi";

function Contas() {
  const [contas, setContas] = useState(null);
  const [evento, setEvento] = useState(null)
  const pageAdress = "/conta/" + localStorage.getItem('login');

  useEffect(() => {
    async function getContas() {
      const newContas = await DataProvider.get(pageAdress)
      setContas(newContas.data.map((d) => {
        return { select: false, id: d.id, valor: d.valor, descricao: d.descricao }
      }));
    }
    getContas();
  }, [evento]);

  function callDeleteConta() {
    contas.forEach(deleteConta);
  }

  async function deleteConta(item) {
    if (item.select) {
      //implementar aqui a chamada no axios para exclusão
      const pageAdressDelete = pageAdress + "/" + item.id
      const newContas = await DataProvider.excluir(pageAdressDelete)
      if (newContas.status === 200) {
        setEvento(item)
        alert("excluido")
      } else {
        alert("Não excluido")
      }
    }
  }



  function renderContas() {
    if (!contas) {
      return null
    }
    return contas.map(conta =>
      <tr key={conta.id}>
        <td ><input
          onChange={event => {
            let checked = event.target.checked;
            setContas(
              contas.map(data => {
                if (conta.id === data.id) {
                  data.select = checked;
                }
                return data;
              })
            );
          }}
          type="checkbox"
          checked={conta.select} /></td>
        <td>{conta.descricao}</td>
        <td>teste</td>
        <td>{conta.valor}</td>
      </tr>
    )
  }

  return (
    <>
      <Navbar nome={localStorage.getItem('user-name')} />
      <Container fluid="sm" className="cont">
        <Row>
          <Col className="titulo">
            <label id="label">Contas</label>
            <GiPayMoney size={50} className="iconCard"></GiPayMoney>
          </Col>
          <Col ></Col>
          <Col ></Col>
          <Col >
            <Button variant="outline-info" id="bt3" onClick={callDeleteConta}>Excluir</Button>
            <Button variant="outline-info" id="bt2">Editar</Button>
            <CrudContas ></CrudContas>
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
