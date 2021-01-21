import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import DataProvider from '../../Services/DataProvider'
import "./Bancos.css"
import CrudBancos from '../../components/ModalBancos/CrudBancos';
import { GiPayMoney } from "react-icons/gi";
import EditBancos from '../../components/ModalBancos/EditBancos';

function Banco() {
    const [bancos, setBancos] = useState(null);
    const [evento, setEvento] = useState(null)

    useEffect(() => {
        async function getContas() {
            const newBancos = await DataProvider.get("/banco/" + localStorage.getItem('login'))
            if (newBancos) {
                setBancos(newBancos.data.map((d) => {
                    return { select: false, id: d.id, valor: d.valor, nome: d.nome }
                }));
            }
        }
        getContas();
    }, [evento]);




    function callDeleteBanco() {
        bancos.forEach(deleteBanco);
    }

    async function deleteBanco(item) {
        if (item.select) {
            //implementar aqui a chamada no axios para exclusão
            const newContas = await DataProvider.excluir("/banco/" + localStorage.getItem('login') + "/" + item.id)
            if (newContas.status === 200) {
                setEvento(item)
                alert("excluido")
            } else {
                alert("Não excluido")
            }
        }
    }



    function renderContas() {
        if (!bancos) {
            return null
        }
        return bancos.map(banco =>
            <tr key={banco.id}>
                <td ><input
                    onChange={event => {
                        let checked = event.target.checked;
                        setBancos(
                            bancos.map(data => {
                                if (banco.id === data.id) {
                                    data.select = checked;
                                }
                                return data;
                            })
                        );
                    }}
                    type="checkbox"
                    checked={banco.select} /></td>
                <td>{banco.nome}</td>
                <td>R$ {banco.valor}</td>
            </tr>
        )
    }

    return (
        <>
            <Navbar nome={localStorage.getItem('user-name')} />
            <Container fluid="sm" className="cont">
                <Row>
                    <Col className="titulo">
                        <label id="label">Bancos</label>
                        <GiPayMoney size={50} className="iconCard"></GiPayMoney>
                    </Col>
                    <Col ></Col>
                    <Col ></Col>
                    <Col >
                        <Button variant="outline-info" id="bt3" onClick={callDeleteBanco}>Excluir</Button>
                        <EditBancos banco={bancos}></EditBancos>
                        <CrudBancos ></CrudBancos>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="info">
                            <thead>
                                <tr>
                                    <th className="check"><Form.Check disabled type="checkbox" /></th>
                                    <th>Nome</th>
                                    <th className="saldo">Saldo</th>
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

export default Banco;
