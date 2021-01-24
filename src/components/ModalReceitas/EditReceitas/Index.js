import React, { useState, useEffect } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import DataProvider from '../../../Services/DataProvider'


function MyVerticallyCenteredModal(props) {
    const [newValor, setNewValor] = useState("")
    const [newOrigem, setNewOrigem] = useState("")
    const [teste, setTeste] = useState(null)
    const [receitaToEdit, setReceitaToEdit] = useState(null)

    useEffect(() => {
        function getReceitas() {
            setTeste(props.banco.banco)
        }
        function editReceita(item) {
            if (item.select) {
                setReceitaToEdit(item)

            }
        }
        function callEditReceita() {
            if (teste) {
                teste.forEach(editReceita);
            }
        }
        getReceitas();
        callEditReceita();
    });



    async function salvaBanco() {
        const pageAdress = "/banco/" + localStorage.getItem('login')
        //Caso não trigger o onchange vai o valor em branco para o banco

        const response = await DataProvider.put(pageAdress, { id: receitaToEdit.id, valor: newValor, origem: newOrigem })
        if (response.status === 200) {

            alert("salvo")
        } else {
            alert("Não salvo")
        }


    }

    const styles = {
        labe: {
            fontSize: 20,
            font: 'bold',
            color: '#17A5B8',
        },
        labeHeader: {
            fontSize: 30,
            color: '#00a2b8',
        },
        btSummit: {
            float: 'right',
        }
    }

    if (!receitaToEdit) {
        return null
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title style={styles.labeHeader}>Editar receita</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={salvaBanco}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label style={styles.labe}>Nome</Form.Label>
                            <Form.Control type="text" placeholder={receitaToEdit.nome} onChange={(event) => setNewOrigem(event.target.value)} value={newOrigem} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label style={styles.labe}>Valor</Form.Label>
                                <Form.Control placeholder={receitaToEdit.valor} type="number" onChange={(event) => setNewValor(event.target.value)} value={newValor} />
                            </Form.Group>
                        </Form.Row>
                    </Form.Row>
                    <hr></hr>
                    <Button style={styles.btSummit} variant="success" type="summit" onClick={props.onHide} >
                        Salvar Conta
            </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    );
}

function EditContas(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-info" style={props.style} onClick={() => setModalShow(true)}>Editar</Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                receita={props}
            />


        </>
    );
}
export default EditContas