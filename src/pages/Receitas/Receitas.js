import React from 'react';
import Navbar from '../../components/NavBar/Navbar'

function Receitas() {
    return (
        <>
            <Navbar />
            <div className='receitas'>
                <h1>Receitas</h1>
            </div>
        </>
    );
}

export default Receitas;

/*
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/NavBar/Navbar'
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap'
import DataProvider from '../../Services/DataProvider'
import CrudReceitas from '../../components/ModalReceitas/CrudReceitas/Index';
import { GiPayMoney } from "react-icons/gi";
import EditReceitas from '../../components/ModalReceitas/EditReceitas/Index';
import styles from './Styles';

function Receitas() {
    const [receitas, setReceitas] = useState(null);
    const [evento, setEvento] = useState(null)

    useEffect(() => {
        async function getContas() {
            const newReceitas = await DataProvider.get("/receita/" + localStorage.getItem('login'))
            if (newReceitas) {
                setReceitas(newReceitas.data.map((d) => {
                    return { select: false, id: d.id, valor: d.valor, origem: d.nome }
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
            const newContas = await DataProvider.excluir("/receita/" + localStorage.getItem('login') + "/" + item.id)
            if (newContas.status === 200) {
                setEvento(item)
                alert("excluido")
            } else {
                alert("Não excluido")
            }
        }
    }



    function renderReceitas() {
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
                <td>{receita.nome}</td>
                <td>R$ {receita.valor}</td>
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
                        <GiPayMoney size={50} style={styles.iconCard}></GiPayMoney>
                    </Col>
                    <Col ></Col>
                    <Col ></Col>
                    <Col >
                        <Button variant="outline-info" style={styles.bt} onClick={callDeleteReceita}>Excluir</Button>
                        <EditReceitas receita={receitas} style={styles.bt}></EditReceitas>
                        <CrudReceitas style={styles.bt}></CrudReceitas>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="info">
                            <thead>
                                <tr>
                                    <th style={styles.check}><Form.Check disabled type="checkbox" /></th>
                                    <th>Origem</th>
                                    <th style={styles.saldo}>Saldo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderReceitas()}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Receitas;

*/