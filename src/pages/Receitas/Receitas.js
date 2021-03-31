import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import DataProvider from '../../Services/DataProvider'
import styles from "./Styles"
import CrudReceitas from '../../components/ModalReceitas/CrudReceitas/Index';
import { GiReceiveMoney } from "react-icons/gi";
import EditContas from '../../components/ModalReceitas/EditReceitas/Index';

function Receitas() {
    const [receitas, setReceitas] = useState(null);
    const [evento, setEvento] = useState(null)

    useEffect(() => {
        async function getContas() {
            const newReceitas = await DataProvider.get("/receita/" + localStorage.getItem('login'))
            if (newReceitas) {
                setReceitas(newReceitas.data.map((d) => {
                    return { select: false, id: d.id, valor: d.valor, origem: d.origem }
                }));
            }
        }
        getContas();
    }, [evento]);




    function callDeleteReceita() {
        receitas.forEach(deleteReceita);
    }

    async function deleteReceita(item) {
        if (item.select) {
            //implementar aqui a chamada no axios para exclusão
            const newReceitas = await DataProvider.excluir("/receita/" + localStorage.getItem('login') + "/" + item.id)
            if (newReceitas.status === 200) {
                setEvento(item)
                alert("excluido")
            } else {
                alert("Não excluido")
            }
        }
    }



    function renderContas() {
        if (!receitas) {
            return null
        }
        return receitas.map(receita =>
            <tr key={receita.id}>
                <td ><input
                    onChange={event => {
                        let checked = event.target.checked;
                        setReceitas(
                            receitas.map(data => {
                                if (receita.id === data.id) {
                                    data.select = checked;
                                }
                                return data;
                            })
                        );
                    }}
                    type="checkbox"
                    checked={receita.select} /></td>
                <td>{receita.origem}</td>
                <td>{receita.valor}</td>
            </tr>
        )
    }

    return (
        <>
            <Navbar nome={localStorage.getItem('user-name')} />
            <Container fluid="sm" style={styles.cont}>
                <Row>
                    <Col style={styles.titulo}>
                        <label style={styles.label}>Receitas</label>
                        <GiReceiveMoney size={50} style={styles.iconCard}></GiReceiveMoney>
                    </Col>
                    <Col ></Col>
                    <Col ></Col>
                    <Col >
                        <Button variant="outline-info" style={styles.bt} onClick={callDeleteReceita}>Excluir</Button>
                        <EditContas receita={receitas} style={styles.bt}></EditContas>
                        <CrudReceitas style={styles.bt}></CrudReceitas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="info">
                            <thead>
                                <tr>
                                    <th><Form.Check disabled type="checkbox" /></th>
                                    <th>Origem</th>
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

export default Receitas;
