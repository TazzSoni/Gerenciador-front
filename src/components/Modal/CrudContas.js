import React from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import './CrudContas.css'

function MyVerticallyCenteredModal(props) {
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
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label id="labe">Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Descrição da conta" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label id="labe">Data</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label id="labe">Valor</Form.Label>
                                <Form.Control type="text" placeholder="Valor da Conta" />
                            </Form.Group>
                        </Form.Row>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.onHide} >
                    Salvar Conta
            </Button>
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