import React, { useState, useEffect } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import './EditBancos.css'
import DataProvider from '../../Services/DataProvider'


function MyVerticallyCenteredModal(props) {
    const [newValor, setNewValor] = useState("")
    const [newNome, setNewNome] = useState("")
    const [teste, setTeste] = useState(null)
    const [bancoToEdit, setBancoToEdit] = useState(null)

    useEffect(() => {
        function getBancos() {
            setTeste(props.banco.banco)
        }
        function editBanco(item) {
            if (item.select) {
                setBancoToEdit(item)

            }
        }
        function callEditBanco() {
            if (teste) {
                teste.forEach(editBanco);
            }
        }
        getBancos();
        callEditBanco();
    }, [props.onHide]);



    async function salvaBanco() {
        const pageAdress = "/banco/" + localStorage.getItem('login')
        //Caso não trigger o onchange vai o valor em branco para o banco

        const response = await DataProvider.put(pageAdress, { id: bancoToEdit.id, valor: newValor, nome: newNome })
        console.log(response)
        if (response.status === 200) {

            alert("salvo")
        } else {
            alert("Não salvo")
        }


    }
    if (!bancoToEdit) {
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
                <Modal.Title id="labeHeader">Cadastro de conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={salvaBanco}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label id="labe">Descrição</Form.Label>
                            <Form.Control type="text" placeholder={bancoToEdit.nome} onChange={(event) => setNewNome(event.target.value)} value={newNome} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label id="labe">Valor</Form.Label>
                                <Form.Control placeholder={bancoToEdit.valor} type="number" onChange={(event) => setNewValor(event.target.value)} value={newValor} />
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

function EditContas(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-info" id="bt1" onClick={() => setModalShow(true)}>Editar</Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                banco={props}
            />


        </>
    );
}
export default EditContas