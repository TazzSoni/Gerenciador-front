import React, { useState } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import './CrudBancos.css'
import DataProvider from '../../Services/DataProvider'


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

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title id="labeHeader">Cadastro de banco</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={salvaConta}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label id="labe">Nome da instituição</Form.Label>
                            <Form.Control type="text" placeholder="Nome da instituição" onChange={(event) => setNewNome(event.target.value)} value={newNome} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label id="labe">Saldo</Form.Label>
                                <Form.Control placeholder="Saldo da Conta" type="number" onChange={(ev) => setNewValor(ev.target.value)} value={newValor} />
                            </Form.Group>
                        </Form.Row>
                    </Form.Row>
                    <hr></hr>
                    <Button className="btSummit" variant="success" type="summit" onClick={props.onHide} >
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