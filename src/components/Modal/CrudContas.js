import React, { useState } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import './CrudContas.css'
import DataProvider from '../../Services/DataProvider'


function MyVerticallyCenteredModal(props) {
    const [newValor, setNewValor] = useState("")
    const [newDescricao, setNewDescricao] = useState("")
    const [newData, setNewData] = useState("")

    async function salvaConta() {
        const pageAdress = "/conta/" + localStorage.getItem('login')
        const response = await DataProvider.post(pageAdress, { valor: newValor, descricao: newDescricao, data: newData })
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
                <Modal.Title id="labeHeader">Cadastro de conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={salvaConta}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label id="labe">Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Descrição da conta" onChange={(event) => setNewDescricao(event.target.value)} value={newDescricao} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label id="labe">Data</Form.Label>
                            <Form.Control type="date" onChange={(ev) => setNewData(ev.target.value)} value={newData} />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label id="labe">Valor</Form.Label>
                                <Form.Control placeholder="Valor da Conta" type="number" onChange={(ev) => setNewValor(ev.target.value)} value={newValor} />
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