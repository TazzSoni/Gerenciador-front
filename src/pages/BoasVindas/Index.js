import React from 'react'
import { Button, Image, Navbar } from 'react-bootstrap'
import monitor from '../../images/monitor.png'
import { useHistory } from 'react-router-dom'
import { GiMoneyStack } from "react-icons/gi";




function BoasVindas() {
    const history = useHistory()

    const routeToLogin = () => {
        history.push('/login')
    }

    const routeCadastrar = () => {
        history.push('/cadastrar')
    }


    return (
        <>

            <div
                style={{
                    height: "100vh",
                    minheight: "100vh",
                    backgroundImage: "linear-gradient(to right,  #17A2B8,#CCF3F8)"
                }}
            >
                <Navbar style={{ padding: 50, backgroundImage: "linear-gradient(to right,  #17A2B8,#CCF3F8)" }}>
                    <Navbar.Brand style={{ color: "white", fontSize: "2rem" }}>
                        <GiMoneyStack style={{ marginRight: "30px", height: "40%", width: "40%" }}></GiMoneyStack>
                        MoneyGoes</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button
                            style={{ borderRadius: "2rem", marginRight: "10%", width: 150 }}
                            variant="outline-light"
                            onClick={routeToLogin}
                        >
                            <label style={{
                                fontSize: "2rem", alignItems: "center", margin: "0, 1, 7, 5"
                            }}>Login</label>
                        </Button>
                    </Navbar.Collapse>
                </Navbar>

                <Image src={monitor} style={{ position: "absolute", height: '50vh', width: '90vh', top: 220, right: 0 }} />

                <div style={{ marginLeft: "5rem" }}>

                    <h3 style={{ fontSize: "5rem", alignItems: "center", marginLeft: "5rem" }}>
                        Sistema
                    </h3>
                    <h3 style={{ marginLeft: "5rem" }}>para Controle financeiro </h3>
                    <h3 style={{ marginLeft: "5rem" }}>inteiramente online</h3>
                    <h4 style={{ marginLeft: "5rem" }}>simples e gratuito</h4>
                    <label style={{ fontSize: "1rem", marginRight: "5%", marginLeft: "5rem" }}>Ainda não é cadastrado?</label>
                    <br></br>
                    <Button
                        style={{ borderRadius: "2rem", marginLeft: "5rem", marginRight: "10%", width: 150, alignItems: "center", justifyContent: "center" }}
                        variant="outline-light"
                        onClick={routeCadastrar}
                    >
                        <label style={{ fontSize: "1rem", marginTop: "7px" }}>cadastre-se</label>
                    </Button>
                </div>


            </div>
        </>
    )
}

export default BoasVindas
