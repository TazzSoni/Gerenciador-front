import React, { useState } from 'react'
import { Container, Button, Col, Image, Navbar, Row } from 'react-bootstrap'
import BgLogin from '../../images/BgLogin.jpg'
import NovoBackground from '../../images/NovoBackground.jpg'
import Monitor from '../../images/Monitor.png'
import ico from '../../images/ico.png'
import { useHistory } from 'react-router-dom'
import DataProvider from '../../Services/DataProvider'
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

                <Image src={Monitor} style={{ position: "absolute", height: '50vh', width: '90vh', top: 220, right: 0 }} />

                <h3 style={{ fontSize: "5rem", alignItems: "center", marginLeft: "5rem", padding: '5rem' }}>
                    Sistema
                    <h3>para Controle financeiro </h3>
                    <h3>inteiramente online</h3>
                    <h4>simples e gratuito</h4>
                    <label style={{ fontSize: "1rem", marginRight: "5%" }}>Ainda não é cadastrado?</label>
                    <br></br>
                    <Button
                        style={{ borderRadius: "2rem", marginRight: "10%", width: 150, alignItems: "center", justifyContent: "center" }}
                        variant="outline-light"
                        onClick={routeCadastrar}
                    >
                        <label style={{ fontSize: "1rem", marginTop: "7px" }}>cadastre-se</label>
                    </Button>

                </h3>


            </div>
        </>
    )
}

export default BoasVindas
