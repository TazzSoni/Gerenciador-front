import React, { useState } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import DataProvider from '../../../Services/DataProvider'


function MyVerticallyCenteredModal(props) {
    const [newValor, setNewValor] = useState("")
    const [newNome, setNewNome] = useState("")

    async function salvaConta() {
        const pageAdress = "/banco/" + localStorage.getItem('login')
        const response = await DataProvider.post(pageAdress, { valor: newValor, nome: newNome })
        console.log(response)
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

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title style={styles.labeHeader}>Cadastro de banco</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={salvaConta}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label style={styles.labe}>Nome da instituição</Form.Label>
                            <Form.Control type="text" placeholder="Nome da instituição" onChange={(event) => setNewNome(event.target.value)} value={newNome} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label style={styles.labe}>Saldo</Form.Label>
                                <Form.Control placeholder="Saldo da Conta" type="number" onChange={(ev) => setNewValor(ev.target.value)} value={newValor} />
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

function CrudContas() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="success" id="bt1" onClick={() => setModalShow(true)}>Adicionar</Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


        </>
    );
}
export default CrudContas