import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import BgLogin from '../../images/BgLogin.jpg'
import { useHistory } from 'react-router-dom'
import DataProvider from '../../Services/DataProvider'



function Login() {
    const [username, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    async function onEnterButtonClick() {
        const response = await DataProvider.login({ username, password })
        if (response.status === 200) {
            localStorage.setItem('login', username)
            history.push('/home')
        } else {
            alert(response.message)
            //redirect("/login")
        }
    }

    const routeHome = () => {
        history.push('/home')
    }

    const routeCadastrar = () => {
        history.push('/cadastrar')
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
            }}
        >
            <div>
                <Card
                    bg='#17A2B8'
                    style={{
                        backgroundColor: "white",
                        width: "30rem",
                        marginBottom: "3px"
                    }}
                >
                    <Card.Img
                        variant="top"
                        src={BgLogin}
                        style={{
                            borderBottomLeftRadius: "25px",
                            borderBottomRightRadius: "25px"
                        }}
                    />
                    <Card.Body>
                        <Form onSubmit={routeHome}>
                            <Form.Group >
                                <Form.Label>Login</Form.Label>
                                <Form.Control onChange={event => setLogin(event.target.value)}
                                    type="text" placeholder="Informe o login..." name="name" value={username} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label >Senha</Form.Label>
                                <Form.Control onChange={event => setPassword(event.target.value)}
                                    name="senha" value={password} type="password" placeholder="Informe a senha..." />
                            </Form.Group>
                            <Button
                                variant="link"
                                type="link"
                                onClick={routeCadastrar}
                                style={{
                                    marginRight: "150px"
                                }}
                            >
                                Cadastrar
  </Button>
                            <Button
                                className="btGo"
                                variant="info"
                                border="light"
                                onClick={onEnterButtonClick}
                                style={{
                                    position: "absolute",
                                    right: "7%"
                                }}
                            >
                                Go!!
  </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Login
