import React, { useState, useEffect } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';
import DataProvider from '../../../Services/DataProvider'


function MyVerticallyCenteredModal(props) {
    const [newValor, setNewValor] = useState("")
    const [newDescricao, setNewDescricao] = useState("")
    const [newData, setNewData] = useState("")
    const [teste, setTeste] = useState(null)
    const [contaToEdit, setContaToEdit] = useState(null)

    useEffect(() => {
        function getContas() {
            setTeste(props.conta.conta)
        }
        function editConta(item) {
            if (item.select) {
                setContaToEdit(item)

            }
        }
        function callEditConta() {
            if (teste) {
                teste.forEach(editConta);
            }
        }
        getContas();
        callEditConta();
    });



    async function salvaConta() {
        const pageAdress = "/conta/" + localStorage.getItem('login')
        //Caso não trigger o onchange vai o valor em branco para o banco

        const response = await DataProvider.put(pageAdress, { id: contaToEdit.id, valor: newValor, descricao: newDescricao, data: newData })
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
                <Modal.Title style={styles.labeHeader}>Cadastro de conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={salvaConta}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label style={styles.labe}>Descrição</Form.Label>
                            <Form.Control type="text" placeholder={contaToEdit.descricao} onChange={(event) => setNewDescricao(event.target.value)} value={newDescricao} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label style={styles.labe}>Data</Form.Label>
                            <Form.Control type="date" onChange={(event) => setNewData(event.target.value)} value={newData} />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label style={styles.labe}>Valor</Form.Label>
                                <Form.Control placeholder={contaToEdit.valor} type="number" onChange={(event) => setNewValor(event.target.value)} value={newValor} />
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
            <Button variant="outline-info" id="bt1" onClick={() => setModalShow(true)}>Editar</Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                conta={props}
            />


        </>
    );
}
export default EditContas