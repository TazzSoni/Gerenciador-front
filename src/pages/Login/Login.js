import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import BgLogin from '../../images/BgLogin.jpg'
import { useHistory } from 'react-router-dom'
import './Login.css'
import Auth from '../../Services/Auth'


function Login() {
    const [username, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    async function onEnterButtonClick() {
        const response = await Auth.login({ username, password })
        console.log(response.status)
        if (response.status === 200) {
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
        <div className="mainLogin">
            <div className="divCardLogin">
                <Card className="cardLogin" bg='#00C1AF'>
                    <Card.Img className="img" variant="top" src={BgLogin} />
                    <Card.Body>
                        <Form onSubmit={routeHome}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Login</Form.Label>
                                <Form.Control onChange={event => setLogin(event.target.value)}
                                    type="text" placeholder="Informe o login..." name="name" value={username} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label >Senha</Form.Label>
                                <Form.Control onChange={event => setPassword(event.target.value)}
                                    name="senha" value={password} type="password" placeholder="Informe a senha..." />
                            </Form.Group>
                            <Button className="btCadastrar" variant="link" type="link" onClick={routeCadastrar}>
                                Cadastrar
  </Button>
                            <Button className="btGo" border="light" onClick={onEnterButtonClick}>
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
