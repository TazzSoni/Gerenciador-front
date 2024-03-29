import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import BgLogin from '../../images/BgLogin.jpg'
import { useHistory } from 'react-router-dom'
import DataProvider from '../../Services/DataProvider'

function Cadastrar() {
    const [nome, setNome] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const history = useHistory()

    //    const routeHome = () => {
    //      console.log(login, password)
    //        history.push('/home')
    //    }

    async function onEnterButtonClick() {
        if (password === confirmPassword) {
            if (nome !== "") {
                const response = await DataProvider.cadastra({ nome: nome, login: login, senha: password })
                if (response === 200) {
                    alert("Cadastrado com Sucesso")
                    history.push('/')
                } else {
                    alert(response)
                    //redirect("/login")
                }
            } else {
                alert("Preencha o nome")
            }
        } else {
            alert("Senhas não confere!!")
        }

    }

    const routeLogin = () => {
        history.push('/')
    }

    return (
        <div
            style={{
                height: "100vh",
                minheight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: "linear-gradient(to right,  #17A2B8,#CCF3F8)"
            }}>
            <div>
                <Card
                    style={{
                        backgroundColor: "white",
                        width: "30rem",
                        marginBottom: "3px"
                    }}
                    bg='#00C1AF'>
                    <Card.Img
                        style={{
                            marginBottom: "10px",
                            borderBottomLeftRadius: "25px",
                            borderBottomRightRadius: "25px"
                        }} variant="top" src={BgLogin} />
                    <Card.Body>
                        <Form>
                            <Form.Group >
                                <Form.Label>Nome</Form.Label>
                                <Form.Control onChange={event => setNome(event.target.value)}
                                    type="text" placeholder="Informe o nome completo..." name="name" value={nome} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Login</Form.Label>
                                <Form.Control onChange={event => setLogin(event.target.value)}
                                    type="text" placeholder="Informe o login..." name="name" value={login} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label >Senha</Form.Label>
                                <Form.Control onChange={event => setPassword(event.target.value)}
                                    name="senha" value={password} type="password" placeholder="Informe a senha..." />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label >Confirme a senha</Form.Label>
                                <Form.Control onChange={event => setConfirmPassword(event.target.value)}
                                    name="senha" value={confirmPassword} type="password" placeholder="Confirme a senha..." />
                            </Form.Group>

                            <Button
                                style={{
                                    position: "absolute",
                                    right: "7%"
                                }}
                                variant="info"
                                border="light"
                                onClick={onEnterButtonClick}
                            >
                                Cadastrar
                            </Button>
                            <Button
                                style={{
                                    marginRight: "150px"
                                }}
                                variant="link"
                                type="link"
                                onClick={routeLogin}
                            >
                                cancelar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Cadastrar

